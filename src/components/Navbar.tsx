import React from 'react'

const Navbar = () => {
/*     if (typeof window === 'object') {
        const sectionEls = document.querySelectorAll('.section');
        const headerEl = document.querySelector('.header');
        const navLinkEls = document.querySelectorAll('.nav-link');
        const popoverEl = document.querySelector('.popover');
        const contentEl = document.querySelector('.content');
        const arrowEl = document.querySelector('.arrow');
        const backgroundEl = document.querySelector('.background');

        const sections = ['products', 'developers', 'company'];

        // TODO: generate on the fly
        const dimensions = {
            products: { width: 600, height: 280, x: 0 },
            developers: { width: 450, height: 450, x: 100 },
            company: { width: 260, height: 296, x: 200 }
        }

        const popoverLeft = popoverEl.getBoundingClientRect().x;

        navLinkEls.forEach((navLink) => {
            let section = navLink.getAttribute('data-nav');
            let rect = navLink.getBoundingClientRect();
            dimensions[section].arrowX = rect.left + (rect.width / 2) - popoverLeft;
        });

        // Set initial arrow position
        arrowEl.style.transform = `
  translateX(${dimensions.products.arrowX}px)
  rotate(45deg)`;


        function showSection(section) {
            popoverEl.classList.add('open');
            sectionEls.forEach(el => el.classList.remove('active'));
            document.querySelector(`.section-${section}`).classList.add('active');

            // Position arrow
            arrowEl.style.transform = `
    translateX(${dimensions[section].arrowX}px)
    rotate(45deg)`;

            // Resize and position background
            backgroundEl.style.transform = `
    translateX(${dimensions[section].x}px)
    scaleX(${dimensions[section].width / dimensions['products'].width})
    scaleY(${dimensions[section].height / dimensions['products'].height})
  `;

            // Resize and position content
            contentEl.style.width = dimensions[section].width + 'px';
            contentEl.style.height = dimensions[section].height + 'px';

            contentEl.style.transform = `translateX(${dimensions[section].x}px)`

            // size container? If we remove from CSS and do everything dynamically.
        }


        navLinkEls.forEach((navLink) => {
            navLink.addEventListener('mouseenter', (event) => {
                let targetPopover = event.target.getAttribute('data-nav');
                showSection(targetPopover);
            });
        });

        headerEl.addEventListener('mouseleave', () => {
            popoverEl.classList.remove('open');
        })

    } */
   
    return (<>

        <header className="header container mx-auto flex justify-center">

            <section>
                <nav className="nav">
                    <button className="nav-link" data-nav="products">
                        Products
                    </button>
                    <button className="nav-link" data-nav="developers">
                        Developers
                    </button>
                    <button className="nav-link" data-nav="company">
                        Company
                    </button>
                </nav>
            </section>

            <div className="popover">
                <div className="content">
                    <section className="section section-products">
                        <ul className="navlist-primary">
                            <li className="navlist-primary-payments">
                                <div className="circle"></div>
                                <div className="navlist-primary-text">
                                    <h3>Payments</h3>
                                    <p>A complete payments platform engineered for growth</p>
                                </div>
                            </li>
                            <li className="navlist-primary-billing">
                                <div className="circle"></div>
                                <div className="navlist-primary-text">
                                    <h3>Billing</h3>
                                    <p>Build and scale your recurring business model.</p>
                                </div>
                            </li>
                            <li className="navlist-primary-connect">
                                <div className="circle"></div>
                                <div className="navlist-primary-text">
                                    <h3>Connect</h3>
                                    <p>Everything platforms need to get sellers paid.</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="section section-developers">
                        <ul className="navlist">
                            <li>Documentation</li>
                        </ul>
                        <p className="subtle">Start integrating Stripe's products and tools.</p>
                        <div className="two-col">
                            <div>
                                <h4>Get started</h4>
                                <ul className="navlist-subtle">
                                    <li>Elements</li>
                                    <li>Checkout</li>
                                    <li>Mobile apps</li>
                                    <li>Libraries</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Popular topics</h4>
                                <ul className="navlist-subtle">
                                    <li>Apple Pay</li>
                                    <li>Testing</li>
                                    <li>Launch checklist</li>
                                    <li>Plug-ins</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="section section-company">
                        <ul className="navlist">
                            <li><i data-feather="info"></i>About Stripe</li>
                            <li><i data-feather="users"></i>Customers</li>
                            <li><i data-feather="server"></i>Partner program</li>
                            <li><i data-feather="briefcase"></i>Jobs</li>
                            <li><i data-feather="image"></i>Environment</li>
                            <li><i data-feather="layout"></i>Newsroom</li>
                        </ul>
                    </section>
                </div>
                <div className="background"></div>
                <div className="arrow"></div>
            </div>
        </header>
    </>
    )
}
export default Navbar
