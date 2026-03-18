/* ============================================
   PI Outdoors — Header Custom Element
   Handles: mobile drawer, desktop dropdowns,
   sticky shadow, accessibility.
   ============================================ */

if (!customElements.get('pi-header')) {
  class PIHeader extends HTMLElement {
    constructor() {
      super();

      /* Cache DOM references */
      this.drawer = this.querySelector('[data-pi-drawer]');
      this.overlay = this.querySelector('[data-pi-drawer-overlay]');
      this.openBtn = this.querySelector('[data-pi-drawer-open]');
      this.closeBtn = this.querySelector('[data-pi-drawer-close]');
      this.headerEl = this.querySelector('[data-pi-header]');
      this.wrapper = this.querySelector('[data-pi-header-wrapper]');
      this.navItems = this.querySelectorAll('[data-pi-has-dropdown]');
      this.accordionToggles = this.querySelectorAll('[data-pi-accordion-toggle]');

      /* Bound handlers for cleanup */
      this._onScroll = this._handleScroll.bind(this);
      this._onKeydown = this._handleKeydown.bind(this);
      this._onResize = this._handleResize.bind(this);
    }

    connectedCallback() {
      /* Mobile drawer */
      if (this.openBtn) {
        this.openBtn.addEventListener('click', () => this.openDrawer());
      }
      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', () => this.closeDrawer());
      }
      if (this.overlay) {
        this.overlay.addEventListener('click', () => this.closeDrawer());
      }

      /* Desktop dropdowns — mouseenter / mouseleave with delay */
      this.navItems.forEach((item) => {
        let timer = null;

        item.addEventListener('mouseenter', () => {
          clearTimeout(timer);
          /* Close other open dropdowns */
          this.navItems.forEach((other) => {
            if (other !== item) other.classList.remove('is-dropdown-open');
          });
          item.classList.add('is-dropdown-open');
        });

        item.addEventListener('mouseleave', () => {
          timer = setTimeout(() => {
            item.classList.remove('is-dropdown-open');
          }, 150);
        });

        /* Keyboard: open on Enter/Space when link has children */
        const link = item.querySelector('.pi-header__nav-link--has-children');
        if (link) {
          link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              const isOpen = item.classList.contains('is-dropdown-open');
              this.navItems.forEach((other) => other.classList.remove('is-dropdown-open'));
              if (!isOpen) {
                item.classList.add('is-dropdown-open');
                const firstLink = item.querySelector('.pi-header__dropdown-link');
                if (firstLink) firstLink.focus();
              }
            }
          });
        }

        /* Close dropdown on focusout if focus leaves the item */
        item.addEventListener('focusout', (e) => {
          requestAnimationFrame(() => {
            if (!item.contains(document.activeElement)) {
              item.classList.remove('is-dropdown-open');
            }
          });
        });
      });

      /* Mobile accordion submenus */
      this.accordionToggles.forEach((toggle) => {
        toggle.addEventListener('click', () => this._toggleAccordion(toggle));
      });

      /* Sticky shadow on scroll */
      window.addEventListener('scroll', this._onScroll, { passive: true });

      /* Global keyboard handler */
      document.addEventListener('keydown', this._onKeydown);

      /* Close drawer on resize past breakpoint */
      window.addEventListener('resize', this._onResize, { passive: true });

      /* Set initial header height CSS variable */
      this._setHeaderHeight();
    }

    disconnectedCallback() {
      window.removeEventListener('scroll', this._onScroll);
      document.removeEventListener('keydown', this._onKeydown);
      window.removeEventListener('resize', this._onResize);
    }

    /* ─── Drawer ─── */
    openDrawer() {
      if (!this.drawer) return;
      this.drawer.classList.add('is-open');
      if (this.overlay) this.overlay.classList.add('is-open');
      document.body.classList.add('pi-drawer-open');

      /* Set focus to close button */
      if (this.closeBtn) {
        requestAnimationFrame(() => this.closeBtn.focus());
      }

      /* Store the element that opened the drawer for focus return */
      this._triggerElement = document.activeElement;

      /* Set up focus trap */
      this._trapFocus();
    }

    closeDrawer() {
      if (!this.drawer) return;
      this.drawer.classList.remove('is-open');
      if (this.overlay) this.overlay.classList.remove('is-open');
      document.body.classList.remove('pi-drawer-open');

      /* Return focus */
      if (this._triggerElement) {
        this._triggerElement.focus();
        this._triggerElement = null;
      }

      /* Remove focus trap */
      this._releaseFocus();
    }

    _trapFocus() {
      if (!this.drawer) return;
      this._focusTrapHandler = (e) => {
        if (e.key !== 'Tab') return;

        const focusable = this.drawer.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      document.addEventListener('keydown', this._focusTrapHandler);
    }

    _releaseFocus() {
      if (this._focusTrapHandler) {
        document.removeEventListener('keydown', this._focusTrapHandler);
        this._focusTrapHandler = null;
      }
    }

    /* ─── Accordion ─── */
    _toggleAccordion(toggle) {
      const menuItem = toggle.closest('[data-pi-drawer-item]');
      if (!menuItem) return;

      const submenu = menuItem.querySelector('[data-pi-submenu]');
      if (!submenu) return;

      const isExpanded = toggle.classList.contains('is-expanded');

      if (isExpanded) {
        submenu.style.maxHeight = '0';
        submenu.classList.remove('is-expanded');
        toggle.classList.remove('is-expanded');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        submenu.style.maxHeight = submenu.scrollHeight + 'px';
        submenu.classList.add('is-expanded');
        toggle.classList.add('is-expanded');
        toggle.setAttribute('aria-expanded', 'true');
      }
    }

    /* ─── Scroll ─── */
    _handleScroll() {
      if (!this.wrapper) return;
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > 10) {
        this.wrapper.classList.add('is-scrolled');
      } else {
        this.wrapper.classList.remove('is-scrolled');
      }
    }

    /* ─── Keyboard ─── */
    _handleKeydown(e) {
      if (e.key === 'Escape') {
        /* Close drawer if open */
        if (this.drawer && this.drawer.classList.contains('is-open')) {
          this.closeDrawer();
          return;
        }
        /* Close any open desktop dropdowns */
        this.navItems.forEach((item) => item.classList.remove('is-dropdown-open'));
      }
    }

    /* ─── Resize ─── */
    _handleResize() {
      if (window.innerWidth >= 990) {
        if (this.drawer && this.drawer.classList.contains('is-open')) {
          this.closeDrawer();
        }
      }
      this._setHeaderHeight();
    }

    /* ─── Header Height CSS variable ─── */
    _setHeaderHeight() {
      if (this.wrapper) {
        document.documentElement.style.setProperty(
          '--pi-header-height',
          this.wrapper.offsetHeight + 'px'
        );
      }
    }
  }

  customElements.define('pi-header', PIHeader);
}
