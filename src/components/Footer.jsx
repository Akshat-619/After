
function Footer() {
  return (
    <footer className="after-footer">
      <div className="after-footer__inner">
        <a href="#top" className="after-footer__logo">
          AFTER<span>.</span>
        </a>

        <p>Fragrance that stays.</p>

        <span className="after-footer__copyright">
          © {new Date().getFullYear()} AFTER
        </span>
      </div>

      <style>{`
        .after-footer {
          width: 100%;
          background: #090807;
          color: #f3eee5;
          border-top: 1px solid rgba(243, 238, 229, 0.14);
        }

        .after-footer__inner {
          width: min(100% - 48px, 1240px);
          min-height: 100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .after-footer__logo {
          color: #f3eee5;
          font-family: var(--font-display, "DM Sans", sans-serif);
          font-size: 28px;
          font-weight: 500;
          letter-spacing: -0.08em;
          text-decoration: none;
        }

        .after-footer__logo span {
          color: #c89455;
        }

        .after-footer__inner p,
        .after-footer__copyright {
          margin: 0;
          color: #9d958a;
          font-family: var(--font-mono, monospace);
          font-size: 10px;
          letter-spacing: 0.04em;
        }

        @media (max-width: 600px) {
          .after-footer__inner {
            width: calc(100% - 32px);
            min-height: 85px;
            gap: 12px;
          }

          .after-footer__logo {
            font-size: 24px;
          }

          .after-footer__inner p,
          .after-footer__copyright {
            font-size: 8px;
          }
        }

        @media (max-width: 380px) {
          .after-footer__inner {
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 18px 0;
          }

          .after-footer__inner p {
            order: 3;
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
