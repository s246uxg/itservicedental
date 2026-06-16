/* ============================================
   IT Service Dental - Main JavaScript
   Navigation, Testimonials, FAQ, Counters, Blog
   ============================================ */

(function() {
  'use strict';

  // ===== BLOG DATA =====
  const blogPosts = [
    {
      id: 'hipaa-compliance-dental-2026',
      emoji: '🔒',
      tag: 'HIPAA',
      title: 'HIPAA Compliance for Dental Practices: A 2026 Guide',
      excerpt: 'Stay compliant with the latest HIPAA requirements. Essential checklist for dental offices in Fairfax and Northern Virginia.',
      date: 'June 12, 2026',
      readTime: '6 min read',
      content: `
        <h2>Why HIPAA Compliance Matters for Your Dental Practice</h2>
        <p>HIPAA compliance isn't just about avoiding fines — it's about protecting your patients' trust. Dental practices handle some of the most sensitive personal health information (PHI), and a data breach can devastate your reputation.</p>
        <p>In 2025, healthcare data breaches affected over 50 million patient records. Dental practices are increasingly targeted because they often have weaker security than hospitals but store equally sensitive data.</p>

        <h2>Essential HIPAA Requirements for 2026</h2>
        <p>Here's what every dental practice in Northern Virginia needs to have in place:</p>

        <h3>1. Risk Assessment</h3>
        <p>Conduct and document a thorough HIPAA risk assessment at least annually. This identifies vulnerabilities in your systems and processes. Many practices fail audits simply because they skipped this step.</p>

        <h3>2. Technical Safeguards</h3>
        <p>Implement access controls, encryption, audit controls, and integrity controls. All patient data must be encrypted at rest and in transit. Your practice management software should enforce role-based access.</p>

        <h3>3. Security Policies</h3>
        <p>Develop written policies covering password management, device security, remote access, and breach notification. Staff must acknowledge these policies in writing.</p>

        <h3>4. Staff Training</h3>
        <p>Train all employees on HIPAA requirements annually. Document every training session. Common violations include discussing patient information in public areas and falling for phishing emails.</p>

        <h3>5. Business Associate Agreements</h3>
        <p>Ensure you have signed BAAs with every vendor that handles PHI — including your IT provider, cloud storage, billing service, and even your document shredding company.</p>

        <h2>Common HIPAA Violations in Dental Practices</h2>
        <p>Based on our experience serving 50+ dental practices in NoVA, here are the most common issues we find:</p>
        <ul>
          <li><strong>Unencrypted devices</strong> — laptops and tablets with patient data that aren't encrypted</li>
          <li><strong>Weak passwords</strong> — using default passwords on practice management software</li>
          <li><strong>Improper disposal</strong> — throwing paper records in regular trash</li>
          <li><strong>Social media posts</strong> — staff sharing photos that include patient information on screens</li>
          <li><strong>Lack of audit logs</strong> — no way to track who accessed patient records</li>
        </ul>
        <p>Not sure where your practice stands? <a href="/contact">Schedule a free HIPAA risk assessment</a> with our team.</p>
      `
    },
    {
      id: 'ransomware-protection-dental-practices',
      emoji: '🛡️',
      tag: 'Cybersecurity',
      title: 'Ransomware Protection for Dental Offices: What You Need to Know',
      excerpt: 'Dental practices are prime targets for ransomware. Learn how to protect your patient data and avoid costly downtime.',
      date: 'June 5, 2026',
      readTime: '5 min read',
      content: `
        <h2>Why Dental Practices Are Targeted by Ransomware</h2>
        <p>Cybercriminals target dental practices because they have valuable data but often lack robust security. A ransomware attack can lock you out of patient records, appointment schedules, and billing systems.</p>
        <p>The average ransomware attack costs a healthcare practice $100,000+ when you factor in downtime, recovery, and potential ransom payments. For a dental practice, every hour of downtime means canceled appointments and lost revenue.</p>

        <h2>How Ransomware Gets In</h2>
        <ul>
          <li><strong>Phishing emails</strong> — 91% of attacks start with an email. Staff click on malicious links or open infected attachments.</li>
          <li><strong>Remote desktop vulnerabilities</strong> — Unsecured RDP connections are a common entry point.</li>
          <li><strong>Outdated software</strong> — Unpatched systems have known vulnerabilities that attackers exploit.</li>
          <li><strong>USB drives</strong> — Infected devices plugged into workstations.</li>
        </ul>

        <h2>Your Ransomware Protection Checklist</h2>
        <p>Here's what every dental practice should have in place:</p>
        <h3>Prevention</h3>
        <ul>
          <li>Endpoint detection and response (EDR) on all devices</li>
          <li>Email security with anti-phishing protection</li>
          <li>Multi-factor authentication everywhere</li>
          <li>Regular security awareness training for staff</li>
          <li>Patch management — keep all software updated</li>
        </ul>
        <h3>Protection</h3>
        <ul>
          <li>Off-site backups that are disconnected from the network</li>
          <li>Immutable backups that can't be encrypted by ransomware</li>
          <li>Regular backup testing — verify you can actually restore</li>
          <li>Network segmentation to contain attacks</li>
        </ul>
        <p>Don't wait until you're attacked. <a href="/contact">Contact us</a> for a cybersecurity assessment of your dental practice.</p>
      `
    },
    {
      id: 'cloud-migration-dental-practice',
      emoji: '☁️',
      tag: 'Cloud',
      title: 'Moving Your Dental Practice to the Cloud: A Step-by-Step Guide',
      excerpt: 'Cloud migration for dental offices explained. Benefits, risks, and a practical roadmap for NoVA practices.',
      date: 'May 28, 2026',
      readTime: '7 min read',
      content: `
        <h2>Is Cloud Right for Your Dental Practice?</h2>
        <p>More dental practices are moving to the cloud for greater flexibility, security, and reliability. But the transition needs to be carefully planned to avoid disruption to patient care.</p>

        <h2>Benefits of Cloud for Dental Offices</h2>
        <ul>
          <li><strong>Access from anywhere</strong> — Securely access patient records from home, another office, or while traveling</li>
          <li><strong>Automatic backups</strong> — Your data is backed up continuously without any effort from your team</li>
          <li><strong>No server maintenance</strong> — No more dealing with crashed servers, UPS batteries, or hardware failures</li>
          <li><strong>Built-in disaster recovery</strong> — If your office floods or burns, your data is safe in the cloud</li>
          <li><strong>Scalability</strong> — Easily add users or storage as your practice grows</li>
        </ul>

        <h2>Step-by-Step Migration Plan</h2>
        <h3>Step 1: Assessment</h3>
        <p>Evaluate your current infrastructure. What hardware and software do you use? What practice management system do you run? What are your specific compliance requirements?</p>

        <h3>Step 2: Choose the Right Platform</h3>
        <p>Not all cloud solutions are equal. For dental practices, we recommend Microsoft 365 Business Premium for productivity tools, paired with a HIPAA-compliant cloud hosting provider for your practice management software.</p>

        <h3>Step 3: Data Migration</h3>
        <p>This is the most critical phase. Patient data must be migrated securely with zero loss. We use encrypted transfer methods and verify data integrity post-migration.</p>

        <h3>Step 4: Staff Training</h3>
        <p>Your team needs to know how to access systems in the new cloud environment. We provide hands-on training tailored to each role in your practice.</p>

        <h3>Step 5: Go Live</h3>
        <p>We schedule the cutover during a low-impact time (typically a weekend) and provide on-site support during your first days on the new system.</p>

        <p>Ready to explore cloud options for your practice? <a href="/contact">Schedule a free consultation</a> with our cloud specialists.</p>
      `
    },
    {
      id: 'dental-practice-management-software-comparison',
      emoji: '🖥️',
      tag: 'Software',
      title: 'Dental Practice Management Software: 2026 Comparison Guide',
      excerpt: 'Compare Dentrix, Eaglesoft, Open Dental, and Curve. Which practice management software is right for your Fairfax dental office?',
      date: 'May 20, 2026',
      readTime: '8 min read',
      content: `
        <h2>Choosing the Right Software for Your Practice</h2>
        <p>Your practice management software is the backbone of your dental office. It handles scheduling, billing, patient records, imaging, and more. Choosing the wrong one — or not optimizing the one you have — can cost you time and money.</p>

        <h2>Top Dental Practice Management Systems</h2>

        <h3>Dentrix</h3>
        <p><strong>Best for:</strong> Large multi-provider practices</p>
        <p>Dentrix is the most widely used dental software in the US. It offers comprehensive features including scheduling, treatment planning, insurance billing, and patient communication. The learning curve is steep, but it's incredibly powerful when configured correctly.</p>

        <h3>Eaglesoft</h3>
        <p><strong>Best for:</strong> Established practices wanting integration</p>
        <p>Eaglesoft offers strong integration with digital imaging and patient engagement tools. It's known for its intuitive interface and robust reporting capabilities. Popular among mid-sized practices in NoVA.</p>

        <h3>Open Dental</h3>
        <p><strong>Best for:</strong> Cost-conscious practices</p>
        <p>Open Dental is an open-source platform with no upfront licensing costs. It's highly customizable and has a strong user community. The tradeoff is that you need technical expertise to maintain and optimize it.</p>

        <h3>Curve (by Patterson Dental)</h3>
        <p><strong>Best for:</strong> Cloud-first practices</p>
        <p>Curve is a modern, cloud-based platform designed for practices that want to minimize on-premise infrastructure. It includes built-in patient portal, online booking, and payment processing.</p>

        <h2>Key Factors to Consider</h2>
        <ul>
          <li><strong>Cloud vs. on-premise</strong> — Cloud offers flexibility; on-premise offers full control</li>
          <li><strong>Integration capabilities</strong> — Does it work with your digital x-ray, CBCT, and intraoral scanners?</li>
          <li><strong>Support quality</strong> — How responsive is the vendor's support team?</li>
          <li><strong>Cost structure</strong> — Upfront license vs. monthly subscription</li>
          <li><strong>Training requirements</strong> — How long will it take your team to learn?</li>
        </ul>
        <p>We support all major dental practice management systems. <a href="/contact">Get in touch</a> if you need help optimizing or migrating your software.</p>
      `
    },
    {
      id: 'phishing-attacks-dental-offices',
      emoji: '🎣',
      tag: 'Cybersecurity',
      title: 'Phishing Attacks Targeting Dental Offices: How to Protect Your Practice',
      excerpt: 'Dental office staff are prime phishing targets. Learn to spot the latest scams and protect patient data.',
      date: 'May 12, 2026',
      readTime: '5 min read',
      content: `
        <h2>Why Your Dental Office Is a Phishing Target</h2>
        <p>Phishing attacks are the #1 threat to dental practices. Cybercriminals know that dental office staff are busy with patients and may not have extensive cybersecurity training. A single click on a malicious link can compromise your entire network.</p>

        <h2>Recent Phishing Scams Targeting Dental Offices</h2>
        <h3>The "Dental Supply" Phish</h3>
        <p>Emails that appear to be from dental supply companies asking you to confirm an order or download an invoice. The attachment contains malware that installs keyloggers or ransomware.</p>

        <h3>The "Insurance Verification" Phish</h3>
        <p>Messages asking front desk staff to verify patient insurance information through a fake portal link. This steals login credentials that are later used to access your practice management system.</p>

        <h3>The "IT Support" Phish</h3>
        <p>Emails claiming to be from your IT provider asking you to reset your password or install an "update." We will never ask you to click a link to reset your password.</p>

        <h2>How to Spot a Phishing Email</h2>
        <ul>
          <li><strong>Check the sender address</strong> — Hover over the sender name. Is it from a legitimate domain?</li>
          <li><strong>Look for urgency</strong> — "Immediate action required" or "Your account will be locked" are red flags</li>
          <li><strong>Check for errors</strong> — Poor grammar and spelling mistakes are common</li>
          <li><strong>Don't click links</strong> — Hover over links to see the actual URL before clicking</li>
          <li><strong>Verify unusual requests</strong> — If an email asks for sensitive information, call the sender to verify</li>
        </ul>

        <h2>What to Do If You Suspect a Phishing Email</h2>
        <ol>
          <li>Do NOT click any links or open attachments</li>
          <li>Forward the email to <a href="mailto:info@secureme247.com">info@secureme247.com</a></li>
          <li>Notify your team so they don't fall for the same scam</li>
          <li>If you clicked a link, contact us immediately</li>
        </ol>
        <p>We offer <a href="/contact">security awareness training</a> for dental office staff. Protect your practice with regular training.</p>
      `
    },
    {
      id: 'network-setup-dental-office-fairfax',
      emoji: '📡',
      tag: 'Networking',
      title: 'Network Setup for Dental Offices: A Complete Guide',
      excerpt: 'Proper network setup is critical for dental practices. Wi-Fi optimization, security, and best practices for NoVA offices.',
      date: 'May 5, 2026',
      readTime: '6 min read',
      content: `
        <h2>Why Your Dental Office Network Matters</h2>
        <p>A reliable network is the foundation of every dental practice. It connects your practice management software, digital x-ray systems, intraoral cameras, patient check-in tablets, and staff workstations. A slow or unreliable network means frustrated staff and delayed patient care.</p>

        <h2>Key Components of a Dental Office Network</h2>
        <h3>1. Enterprise-Grade Router & Firewall</h3>
        <p>Consumer-grade routers aren't designed for the demands of a dental practice. We recommend business-grade equipment with built-in firewall, VPN support, and quality of service (QoS) settings to prioritize critical traffic.</p>

        <h3>2. Managed Switch</h3>
        <p>A managed switch lets you segment your network, prioritize traffic, and monitor performance. You can separate your practice management system traffic from guest Wi-Fi and IoT devices.</p>

        <h3>3. Professional Wi-Fi Access Points</h3>
        <p>Don't rely on a single consumer router for Wi-Fi. Multiple access points strategically placed throughout your office ensure strong coverage in every operatory, front desk area, and break room.</p>

        <h3>4. Structured Cabling</h3>
        <p>For stationary devices like workstations and printers, wired connections are faster and more reliable than Wi-Fi. Properly terminated Cat6 cabling ensures gigabit speeds.</p>

        <h2>Network Best Practices for Dental Offices</h2>
        <ul>
          <li><strong>Network segmentation</strong> — Keep guest Wi-Fi, practice devices, and IoT on separate VLANs</li>
          <li><strong>Wi-Fi 6</strong> — Upgrade to Wi-Fi 6 for better performance in dense environments</li>
          <li><strong>Bandwidth</strong> — Ensure at least 100 Mbps internet connection for cloud-based software</li>
          <li><strong>Backup connection</strong> — Have a cellular failover for when your main internet goes down</li>
          <li><strong>Regular speed tests</strong> — Monitor your network performance weekly</li>
        </ul>
        <p>Need help with your practice's network? We provide <a href="/contact">network design and installation</a> for dental offices across Fairfax and Northern Virginia.</p>
      `
    }
  ];

  // ===== MOBILE NAV TOGGLE =====
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // ===== NAVBAR SCROLL EFFECT =====
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  if (navbar) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ===== BACK TO TOP =====
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== TESTIMONIALS CAROUSEL =====
  const track = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  const dots = document.querySelectorAll('.testimonial-dot');

  if (track && prevBtn && nextBtn && dots.length) {
    let currentIndex = 0;
    const cards = Array.from(track.querySelectorAll('.testimonial-card'));
    const totalSlides = cards.length;

    function getCardsPerView() {
      if (window.innerWidth < 600) return 1;
      if (window.innerWidth < 900) return 2;
      return 3;
    }

    function goToSlide(index) {
      const cardsPerView = getCardsPerView();
      const maxIndex = Math.max(0, totalSlides - cardsPerView);
      currentIndex = Math.min(index, maxIndex);
      currentIndex = Math.max(0, currentIndex);

      const cardWidth = cards[0].offsetWidth + 24; // card + gap
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.dataset.index));
      });
    });

    // Handle resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => goToSlide(currentIndex), 200);
    });

    // Auto-play
    let autoplayInterval = setInterval(() => {
      const cardsPerView = getCardsPerView();
      const maxIndex = totalSlides - cardsPerView;
      if (currentIndex >= maxIndex) {
        goToSlide(0);
      } else {
        goToSlide(currentIndex + 1);
      }
    }, 5000);

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    track.addEventListener('mouseleave', () => {
      autoplayInterval = setInterval(() => {
        const cardsPerView = getCardsPerView();
        const maxIndex = totalSlides - cardsPerView;
        if (currentIndex >= maxIndex) {
          goToSlide(0);
        } else {
          goToSlide(currentIndex + 1);
        }
      }, 5000);
    });

    // Initialize
    goToSlide(0);
  }

  // ===== FAQ ACCORDION =====
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all
        faqItems.forEach(i => i.classList.remove('active'));

        // Toggle current
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // ===== COUNTER ANIMATION =====
  function animateCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target);
      const duration = 2000; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);

        counter.textContent = current.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    });
  }

  // Trigger counters when visible
  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
  }

  // ===== HERO TYPEWRITER =====
  const typewriterEl = document.querySelector('.typewriter');
  if (typewriterEl) {
    const phrases = ['Running Smoothly', 'Compliant & Secure', 'Fully Optimized', 'Always Protected'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function typeEffect() {
      const currentPhrase = phrases[phraseIndex];

      if (isPaused) {
        setTimeout(typeEffect, 2000);
        isPaused = false;
        isDeleting = true;
        return;
      }

      if (!isDeleting) {
        // Typing
        charIndex++;
        typewriterEl.textContent = currentPhrase.substring(0, charIndex);

        if (charIndex === currentPhrase.length) {
          isPaused = true;
          setTimeout(typeEffect, 2500);
          return;
        }

        setTimeout(typeEffect, 60 + Math.random() * 40);
      } else {
        // Deleting
        charIndex--;
        typewriterEl.textContent = currentPhrase.substring(0, charIndex);

        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(typeEffect, 400);
          return;
        }

        setTimeout(typeEffect, 30);
      }
    }

    // Start after initial load
    setTimeout(typeEffect, 1500);
  }

  // ===== HERO STAT COUNTERS (incremental) =====
  // These are the visible stats in the hero
  const heroStats = document.querySelectorAll('.hero-stat-number[data-count]');
  heroStats.forEach(stat => {
    const target = parseFloat(stat.dataset.count);
    const isPercent = stat.textContent.includes('%');

    // These animate on load
    const duration = 1500;
    const startTime = performance.now();

    function updateHeroStat(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      let current;
      if (isPercent) {
        current = (eased * target).toFixed(1);
        stat.textContent = current + '%';
      } else {
        current = Math.round(eased * target);
        stat.textContent = current.toLocaleString();
      }

      if (progress < 1) {
        requestAnimationFrame(updateHeroStat);
      }
    }

    // Start immediately
    requestAnimationFrame(updateHeroStat);
  });

  // ===== BLOG POSTS RENDERING =====
  const blogGrid = document.getElementById('blogGrid');
  if (blogGrid) {
    // Render newest first (reverse chronological)
    blogPosts.forEach((post, index) => {
      const card = document.createElement('a');
      card.href = `/blog-post.html?id=${post.id}`;
      card.className = 'blog-card';
      card.setAttribute('data-animate', 'fadeInUp');
      card.setAttribute('data-delay', (index * 100).toString());

      card.innerHTML = `
        <div class="blog-card-image">
          <div class="emoji">${post.emoji}</div>
        </div>
        <div class="blog-card-body">
          <span class="blog-card-tag">${post.tag}</span>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <div class="blog-card-meta">
            <span>${post.date}</span>
            <span>${post.readTime}</span>
          </div>
        </div>
      `;

      blogGrid.appendChild(card);
    });

    // Re-init scroll animations for dynamic content
    if (window.initScrollAnimations) {
      setTimeout(window.initScrollAnimations, 100);
    }
  }

  // ===== BLOG POST PAGE =====
  const postTitle = document.getElementById('postTitle');
  if (postTitle) {
    // Get the blog post ID from URL
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');

    if (postId) {
      const post = blogPosts.find(p => p.id === postId);

      if (post) {
        postTitle.textContent = post.title;
        document.getElementById('postTag').textContent = post.tag;
        document.getElementById('postDate').textContent = post.date;
        document.getElementById('postReadTime').textContent = post.readTime;
        document.getElementById('postContent').innerHTML = post.content;

        // Build Table of Contents from headings in post content
        buildTOC();

        // Update meta tags
        document.querySelector('title').textContent = `${post.title} | IT Service Dental`;
        document.querySelector('meta[name="description"]').content = post.excerpt;

        // Update canonical
        const canon = document.querySelector('link[rel="canonical"]');
        if (canon) canon.href = `https://www.itservicedental.com/blog-post?id=${post.id}`;

        // Update OG tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.content = `${post.title} | IT Service Dental`;
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.content = post.excerpt;
      } else {
        postTitle.textContent = 'Post Not Found';
        document.getElementById('postContent').innerHTML = '<p>Sorry, the article you\'re looking for doesn\'t exist. <a href="/blog">Browse all articles</a>.</p>';
      }
    } else {
      postTitle.textContent = 'Page Not Found';
      document.getElementById('postContent').innerHTML = '<p>No article specified. <a href="/blog">Browse all articles</a>.</p>';
    }
  }

  // ===== BUILD TABLE OF CONTENTS =====
  function buildTOC() {
    const content = document.getElementById('postContent');
    if (!content) return;

    const headings = content.querySelectorAll('h2, h3');
    if (headings.length < 2) {
      // Hide TOC if not enough headings
      const sidebar = document.getElementById('tocSidebar');
      const mobile = document.querySelector('.toc-mobile');
      if (sidebar) sidebar.style.display = 'none';
      if (mobile) mobile.style.display = 'none';
      return;
    }

    const desktopList = document.getElementById('tocDesktopList');
    const mobileList = document.getElementById('tocMobileList');
    if (!desktopList || !mobileList) return;

    const desktopUl = document.createElement('ul');
    const mobileUl = document.createElement('ul');

    headings.forEach((heading, index) => {
      const slug = 'toc-' + index + '-' + heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      heading.id = slug;

      const isH3 = heading.tagName === 'H3';
      const text = heading.textContent;

      // Build link
      const link = document.createElement('a');
      link.href = '#' + slug;
      link.className = 'toc-link' + (isH3 ? ' toc-h3' : '');
      link.setAttribute('data-toc-slug', slug);
      link.textContent = text;

      // Desktop list item
      const li = document.createElement('li');
      li.appendChild(link.cloneNode(true));
      desktopUl.appendChild(li);

      // Mobile list item
      const liM = document.createElement('li');
      liM.appendChild(link.cloneNode(true));
      mobileUl.appendChild(liM);
    });

    desktopList.appendChild(desktopUl);
    mobileList.appendChild(mobileUl);

    // Smooth scroll on click + active state (green highlight)
    const allTocLinks = document.querySelectorAll('.toc-link');
    let tocClickCooldown = false;
    allTocLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const slug = this.getAttribute('data-toc-slug');
        const target = document.getElementById(slug);
        if (target) {
          // Manually mark clicked link as active (green)
          allTocLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
          // Temporarily disable scroll-spy to keep green highlighted
          tocClickCooldown = true;
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Re-enable scroll-spy after scroll animation completes
          setTimeout(() => { tocClickCooldown = false; }, 800);
        }
      });
    });

    // IntersectionObserver for scroll-spy active tracking
    const tocData = [];
    allTocLinks.forEach(link => {
      const slug = link.getAttribute('data-toc-slug');
      const el = document.getElementById(slug);
      if (el) tocData.push({ el, link });
    });

    if (tocData.length > 0) {
      let tocObserverEnabled = true;
      const observer = new IntersectionObserver((entries) => {
        if (tocClickCooldown) return; // Skip while click animation is running
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const slug = entry.target.id;
            allTocLinks.forEach(l => {
              const isActive = l.getAttribute('data-toc-slug') === slug;
              l.classList.toggle('active', isActive);
            });
          }
        });
      }, {
        rootMargin: '-96px 0px -60% 0px',
        threshold: 0,
      });

      tocData.forEach(({ el }) => observer.observe(el));

      // Mark first heading active on load
      if (tocData.length > 0) {
        tocData[0].link.classList.add('active');
      }
    }
  }

})();
