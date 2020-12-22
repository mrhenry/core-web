const html = require('../../html/html');

module.exports = function siteFooter() {
    return html`
        <footer class="site-footer">
            <div class="wrapper">
                <div class="site-footer__inner">
                    <div class="site-footer__logo-container">
                        <a
                            class="site-footer__logo"
                            href="https://www.mrhenry.be/"
                            rel="nofollow"
                            target="_blank"
                        >
                            Animated logo here?
                        </a>
                    </div>

                    <div class="site-footer__content-container">
                        <p>
                            We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! Must go faster. Did he just throw my cat out of the window? Jaguar shark! So tell me - does it really exist?
                        </p>

                        <p>
                            <a href="">
                                A link
                            </a>,

                            <a href="">
                                Another link
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    `;
}
