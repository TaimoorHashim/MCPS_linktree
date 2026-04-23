import { useState } from "react";
import logo from './assets/logo.png';

 const links = [
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/mindcareclinic.pk?igsh=MXh2M3B2bWxqMG1tZg%3D%3D&utm_source=qr",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="igGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <path
          fill="url(#igGrad)"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/share/1FLGk4Fmd7/?mibextid=wwXIfr",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877f2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
  id: "tiktok",
  label: "Mind Care — TikTok",
  url: "https://www.tiktok.com/@mindcareclinic.pk?_r=1&_t=ZS-94StFPqdss1",
  icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" fill="#000"/>
    </svg>
  ),
},
{
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/company/YOUR_LINKEDIN",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#0077b5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    url: "https://wa.me/message/4ANG2UD4N4E4C1",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#25d366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
  id: "gmail",
  label: "Mind Care — Gmail",
  url: "https://mail.google.com/mail/?view=cm&to=mindcareclinic.pk@gmail.com",
  icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4h20v16H2z" fill="#fff" stroke="#e0e0e0" strokeWidth="1"/>
      <path d="M2 4l10 9 10-9" stroke="#EA4335" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2 4v16h4V10l6 5 6-5v10h4V4" fill="#fff"/>
      <path d="M2 4l10 9 10-9" fill="none"/>
    </svg>
  ),
},
  {
    id: "website",
    label: "Mind Care — Official Website",
    url: "https://YOUR_WEBSITE_URL.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "easypaisa",
    label: "Pay via Easypaisa",
    url: "https://easypaisa.com.pk/YOUR_EASYPAISA_LINK",
    icon: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#4caf50" />
        <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="sans-serif">EP</text>
      </svg>
    ),
  },
];

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    background: "linear-gradient(160deg, #e8f5e9 0%, #f9fffe 40%, #e0f2e9 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "48px 16px 64px",
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
  },
  avatarRing: {
    width: 88,
    height: 88,
    borderRadius: "50%",
    background: "#ffffff",
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    color: "#1b5e20",
    margin: "0 0 6px",
    textAlign: "center",
  },
  tagline: {
    fontSize: 14,
    color: "#388e3c",
    margin: "0 0 20px",
    textAlign: "center",
  },

  // NEW SHARE BUTTON STYLE
  shareBtn: {
    background: "#2e7d32",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: 30,
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 30,
    transition: "0.2s",
  },

  linksContainer: {
    width: "100%",
    maxWidth: 480,
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    background: "#ffffff",
    border: "1.5px solid #c8e6c9",
    borderRadius: 50,
    padding: "13px 20px",
    textDecoration: "none",
    cursor: "pointer",
    position: "relative",
  },
  linkHover: {
    background: "#f1f8f2",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(46,125,50,0.12)",
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "#e8f5e9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  linkLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: 600,
    color: "#1b5e20",
    textAlign: "center",
    marginRight: 40,
  },
  footer: {
    marginTop: 44,
    fontSize: 12,
    color: "#81c784",
    textAlign: "center",
  },
  as React.CSSProperties
};

function LinkButton({ link }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.link,
        ...(hovered ? styles.linkHover : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.iconBox}>{link.icon}</div>
      <span style={styles.linkLabel}>{link.label}</span>
    </a>
  );
}

export default function MindCareLinks() {

  // SHARE FUNCTION
  const handleShare = async () => {
    const shareData = {
      title: "Mind Care Psychological Clinic",
      text: "Check out Mind Care Psychological Clinic",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.log("Share failed:", err);
    }
  };

  return (
    <div style={styles.page}>
      
      {/* Logo */}
      <div style={styles.avatarRing}>
        <img src={logo} alt="Mind Care Logo" style={{ width: 90, height: 90, borderRadius: "50%" }} />
      </div>

      {/* Name */}
      <h1 style={styles.name}>Mind Care Psychological Clinic</h1>

      {/* Tagline */}
      <p style={styles.tagline}>
        Your mental health matters · Compassionate care
        <br />
        Psychology | Therapy | Wellbeing
      </p>

      {/* NEW SHARE BUTTON */}
      <button style={styles.shareBtn} onClick={handleShare}>
        🔗 Share This Page
      </button>

      {/* Links */}
      <div style={styles.linksContainer}>
        {links.map((link) => (
          <LinkButton key={link.id} link={link} />
        ))}
      </div>

      {/* Footer */}
      <p style={styles.footer}>
        © {new Date().getFullYear()} Mind Care Psychological Clinic
        <br />
        All rights reserved
      </p>
    </div>
  );
}