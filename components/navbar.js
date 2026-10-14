window.NavbarComponent = function() {
    return `
    <header class="site-header" role="banner">
        <!-- Top Row: Brand & Accessibility Tools -->
        <div class="header-main">
            <div class="header-container">
                <a href="index.html" class="nav-brand" aria-label="Arunachal Pradesh Administrative Reforms Commission - Go to Homepage">
                    <img src="images/Arunachal_Pradesh_Seal.png" alt="Emblem of Arunachal Pradesh">
                    <div class="nav-brand-text">
                        <span class="nav-brand-title">Arunachal Pradesh Administrative Reforms Commission</span>
                        <span class="nav-brand-sub">Government of Arunachal Pradesh</span>
                    </div>
                </a>

                <div class="header-tools" role="region" aria-label="Accessibility Tools">
                    <a href="#main-content" class="header-tool-btn" id="skip-to-main" title="Skip to Main Content" aria-label="Skip to Main Content">
                        <img src="icons/skip-to-main.svg" class="tool-icon" alt="" aria-hidden="true">
                    </a>
                    <span class="tool-separator" aria-hidden="true">|</span>
                    <div class="text-size-controls" role="group" aria-label="Text Size Controls">
                        <button class="header-tool-btn" id="btn-decrease-text" aria-label="Decrease text size" title="Decrease Font Size" type="button">
                            <img src="icons/text-decrease.svg" class="tool-icon" alt="" aria-hidden="true">
                        </button>
                        <button class="header-tool-btn" id="btn-normal-text" aria-label="Reset text to normal size" title="Normal Font Size" type="button">
                            <img src="icons/text-normal.svg" class="tool-icon" alt="" aria-hidden="true">
                        </button>
                        <button class="header-tool-btn" id="btn-increase-text" aria-label="Increase text size" title="Increase Font Size" type="button">
                            <img src="icons/text-increase.svg" class="tool-icon" alt="" aria-hidden="true">
                        </button>
                    </div>
                    <span class="tool-separator" aria-hidden="true">|</span>
                    <a href="accessibility-statement.html" class="header-tool-btn" title="Accessibility Statement & Screen Reader Access" aria-label="Screen Reader Access information page">
                        <img src="icons/accessibility.svg" class="tool-icon" alt="" aria-hidden="true">
                    </a>
                </div>
            </div>
        </div>

        <!-- Bottom Row: Navigation Bar -->
        <nav class="navbar" id="nav-content" role="navigation" aria-label="Main Navigation">
            <div class="navbar-container">
                <button class="mobile-menu-btn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="main-nav-links" type="button">☰</button>
                <ul class="nav-links" id="main-nav-links" role="menubar">
                    <li class="nav-item" role="none"><a href="index.html" class="nav-link" role="menuitem">Home</a></li>
                    <li class="nav-item" role="none">
                        <a href="#" class="nav-link" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown-commission">Commission <img src="icons/Caret%20Down.svg" class="chevron" alt="" aria-hidden="true"></a>
                        <ul class="dropdown-menu" id="dropdown-commission" role="menu" aria-label="Commission submenu">
                            <li role="none"><a href="index.html#about" role="menuitem">About the Commission</a></li>
                            <li role="none"><a href="index.html#commission" role="menuitem">The Commission</a></li>
                            <li role="none"><a href="termsofreference.html" role="menuitem">Terms of Reference</a></li>
                        </ul>
                    </li>
                    <li class="nav-item" role="none">
                        <a href="#" class="nav-link" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown-resources">Resources <img src="icons/Caret%20Down.svg" class="chevron" alt="" aria-hidden="true"></a>
                        <ul class="dropdown-menu" id="dropdown-resources" role="menu" aria-label="Resources submenu">
                            <li role="none"><a href="notice.html" role="menuitem">Notices &amp; Announcements</a></li>
                            <li role="none"><a href="news.html" role="menuitem">News &amp; Press Releases</a></li>
                            <li role="none"><a href="reports.html" role="menuitem">Reports</a></li>
                        </ul>
                    </li>
                    <li class="nav-item" role="none"><a href="gallery.html" class="nav-link" role="menuitem">Media</a></li>
                    <li class="nav-item" role="none">
                        <a href="#" class="nav-link" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown-connect">Connect <img src="icons/Caret%20Down.svg" class="chevron" alt="" aria-hidden="true"></a>
                        <ul class="dropdown-menu" id="dropdown-connect" role="menu" aria-label="Connect submenu">
                            <li role="none"><a href="suggestions.html" role="menuitem">Suggestions &amp; Feedback</a></li>
                            <li role="none"><a href="contact.html" role="menuitem">Contact Us</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    `;
};
