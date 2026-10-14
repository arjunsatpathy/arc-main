window.FooterComponent = function() {
    let lastUpdatedDate = '';
    try {
        const metaTag = document.querySelector('meta[name="last-updated"]');
        if (metaTag && metaTag.content) {
            lastUpdatedDate = metaTag.content;
        } else if (document.lastModified) {
            const d = new Date(document.lastModified);
            if (!isNaN(d.getTime())) {
                const day = String(d.getDate()).padStart(2, '0');
                const month = String(d.getMonth() + 1).padStart(2, '0');
                const year = d.getFullYear();
                lastUpdatedDate = `${day}-${month}-${year}`;
            }
        }
    } catch(e) {}
    if (!lastUpdatedDate) {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        lastUpdatedDate = `${day}-${month}-${year}`;
    }

    return `
    <footer class="site-footer" role="contentinfo" aria-label="Site Footer">
        <div class="footer-container">
            <div class="footer-grid">
                <!-- Column 1: Contact -->
                <div class="footer-col">
                    <h4 class="footer-heading" id="footer-contact-heading">CONTACT</h4>
                    <div class="footer-heading-line" aria-hidden="true"></div>
                    <ul class="footer-list" aria-labelledby="footer-contact-heading">
                        <li><strong>Administrative Reforms Commission</strong></li>
                        <li>3rd Floor, Administrative Block, ATI, Naharlagun,<br>Arunachal Pradesh - 791110</li>
                        <li>Email: chair-aparc[at]arn[dot]gov[dot]in</li>
                    </ul>
                </div>

                <!-- Column 2: Policies & Help -->
                <div class="footer-col">
                    <h4 class="footer-heading" id="footer-help-heading">POLICIES &amp; HELP</h4>
                    <div class="footer-heading-line" aria-hidden="true"></div>
                    <ul class="footer-list" aria-labelledby="footer-help-heading">
                        <li><a href="termsofreference.html">Terms of Reference</a></li>
                        <li><a href="suggestions.html">Suggestions &amp; Feedback</a></li>
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="termsandcondition.html">Terms and Conditions</a></li>
                        <li><a href="copyright.html">Copyright Policy</a></li>
                        <li><a href="hyperlink.html">Hyperlink Policy</a></li>
                        <li><a href="accessibility-statement.html">Accessibility Statement</a></li>
                    </ul>
                </div>

                <!-- Column 3: External Links -->
                <div class="footer-col">
                    <h4 class="footer-heading" id="footer-external-heading">EXTERNAL LINKS</h4>
                    <div class="footer-heading-line" aria-hidden="true"></div>
                    <ul class="footer-list" aria-labelledby="footer-external-heading">
                        <li><a href="https://arunachalgovernor.gov.in/welcome.asp" target="_blank" rel="noopener noreferrer" class="external-link" aria-label="Governor of Arunachal Pradesh (opens in new tab)">Governor of Arunachal Pradesh ↗</a></li>
                        <li><a href="https://arunachalpradesh.gov.in/" target="_blank" rel="noopener noreferrer" class="external-link" aria-label="Government of Arunachal Pradesh (opens in new tab)">Govt. of Arunachal Pradesh ↗</a></li>
                        <li><a href="https://arungovard.nic.in/Home.aspx" target="_blank" rel="noopener noreferrer" class="external-link" aria-label="Department of Administrative Reforms (opens in new tab)">Dept. of Administrative Reforms ↗</a></li>
                        <li><a href="https://aparc-forum.vercel.app" target="_blank" rel="noopener noreferrer" class="external-link" aria-label="APARC Suggestions & Feedback Portal (opens in new tab)">Suggestions &amp; Feedback Portal ↗</a></li>
                    </ul>
                </div>

                <!-- Column 4: NIC Logo & Last Updated -->
                <div class="footer-col footer-col-logo">
                    <a href="https://www.nic.in" target="_blank" rel="noopener noreferrer" aria-label="National Informatics Centre website (opens in new tab)" class="footer-nic-link external-link">
                        <img src="images/nic-logo.png" alt="National Informatics Centre Logo" class="footer-nic-img">
                    </a>
                    <div class="footer-last-updated" aria-label="Page last updated date">
                        <span>Last Updated On: <strong id="last-updated-date">${lastUpdatedDate}</strong></span>
                    </div>
                </div>
            </div>

            <!-- Bottom: Centered Navigation & Copyright -->
            <div class="footer-bottom">
                <nav class="footer-bottom-nav" aria-label="Footer Navigation">
                    <a href="index.html">Home</a>
                    <span class="footer-sep" aria-hidden="true">|</span>
                    <a href="sitemap.html">Sitemap</a>
                    <span class="footer-sep" aria-hidden="true">|</span>
                    <a href="disclaimer.html">Disclaimer</a>
                    <span class="footer-sep" aria-hidden="true">|</span>
                    <a href="accessibility-statement.html">Accessibility</a>
                    <span class="footer-sep" aria-hidden="true">|</span>
                    <span class="footer-copyright">&copy; ${new Date().getFullYear()} Arunachal Pradesh Administrative Reforms Commission, Govt. of Arunachal Pradesh</span>
                </nav>
            </div>
        </div>
    </footer>
    `;
};
