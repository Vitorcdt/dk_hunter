/* DK Hunters — Hero drift scene components */

/* Detailed JDM-style coupe — lower, wider, more realistic */
function CarGTR({ style, accent = "#ffd76a" }) {
  return (
    <svg viewBox="0 0 480 200" style={style} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gtr-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a1f08"/>
          <stop offset="40%" stopColor="#0a0907"/>
          <stop offset="100%" stopColor="#000"/>
        </linearGradient>
        <linearGradient id="gtr-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a4a20" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#000" stopOpacity="0.95"/>
        </linearGradient>
        <radialGradient id="gtr-light">
          <stop offset="0%" stopColor="#fff5b8"/>
          <stop offset="60%" stopColor="#ffd76a"/>
          <stop offset="100%" stopColor="#ffd76a" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* ground shadow */}
      <ellipse cx="240" cy="180" rx="220" ry="9" fill="#000" opacity="0.7"/>
      {/* headlight beam (front-left) */}
      <ellipse cx="50" cy="120" rx="80" ry="40" fill="url(#gtr-light)" opacity="0.7"/>
      <ellipse cx="40" cy="120" rx="40" ry="20" fill="url(#gtr-light)" opacity="0.95"/>
      {/* low-slung GTR-style profile */}
      <path d="M 28 150 L 28 130 Q 28 115 50 108 L 90 96 Q 130 80 200 72 Q 280 65 350 75 Q 410 84 445 100 L 460 120 Q 462 132 462 150 L 460 165 Q 458 172 450 172 L 380 172 Q 376 158 360 158 Q 344 158 340 172 L 140 172 Q 136 158 120 158 Q 104 158 100 172 L 36 172 Q 28 172 28 165 Z"
            fill="url(#gtr-body)" stroke={accent} strokeWidth="1.4"/>
      {/* greenhouse */}
      <path d="M 100 96 Q 145 78 200 72 Q 280 65 340 75 Q 380 82 400 95 L 395 115 Q 360 102 280 98 Q 180 96 110 110 Z"
            fill="url(#gtr-glass)" stroke={accent} strokeWidth="0.7" opacity="0.95"/>
      {/* roof highlight */}
      <path d="M 130 88 Q 200 76 280 75 Q 350 78 380 88" fill="none" stroke="#fff5b8" strokeWidth="0.8" opacity="0.55"/>
      {/* gold accent line */}
      <path d="M 30 144 L 460 144" stroke={accent} strokeWidth="1.6" opacity="0.9"/>
      <path d="M 30 148 L 460 148" stroke={accent} strokeWidth="0.5" opacity="0.4"/>
      {/* side air intake */}
      <path d="M 280 124 L 340 116 L 342 134 L 282 140 Z" fill="#000" stroke={accent} strokeWidth="0.6" opacity="0.85"/>
      <line x1="290" y1="128" x2="335" y2="122" stroke={accent} strokeWidth="0.4" opacity="0.5"/>
      <line x1="290" y1="132" x2="335" y2="126" stroke={accent} strokeWidth="0.4" opacity="0.5"/>
      {/* rear spoiler */}
      <path d="M 425 105 L 462 100 L 462 108 L 425 113 Z" fill="#000" stroke={accent} strokeWidth="0.6"/>
      <rect x="424" y="98" width="4" height="14" fill={accent} opacity="0.6"/>
      {/* wheel arches */}
      <circle cx="115" cy="160" r="26" fill="#000"/>
      <circle cx="365" cy="160" r="26" fill="#000"/>
      {/* rims w/ motion blur dashes */}
      <circle cx="115" cy="160" r="18" fill="#0a0907" stroke={accent} strokeWidth="0.7"/>
      <circle cx="365" cy="160" r="18" fill="#0a0907" stroke={accent} strokeWidth="0.7"/>
      <circle cx="115" cy="160" r="14" fill="none" stroke={accent} strokeWidth="3" opacity="0.55" strokeDasharray="3 6"/>
      <circle cx="365" cy="160" r="14" fill="none" stroke={accent} strokeWidth="3" opacity="0.55" strokeDasharray="3 6"/>
      {/* center caps */}
      <circle cx="115" cy="160" r="3.5" fill={accent}/>
      <circle cx="365" cy="160" r="3.5" fill={accent}/>
      {/* taillights — twin GTR-style red rings (right side) */}
      <circle cx="448" cy="125" r="6" fill="none" stroke="#ff5656" strokeWidth="2.2"/>
      <circle cx="448" cy="125" r="3" fill="#ff8888"/>
      <circle cx="448" cy="142" r="6" fill="none" stroke="#ff5656" strokeWidth="2.2"/>
      <circle cx="448" cy="142" r="3" fill="#ff8888"/>
      {/* headlights */}
      <rect x="30" y="115" width="20" height="6" rx="1.5" fill="#fff5b8"/>
      <rect x="30" y="125" width="14" height="4" rx="1" fill="#ffd76a"/>
      {/* windshield reflection */}
      <path d="M 130 90 L 160 78 L 200 76 L 175 96 Z" fill="#fff" opacity="0.1"/>
      <path d="M 280 76 L 340 78 L 360 92 L 290 92 Z" fill="#fff" opacity="0.06"/>
      {/* license/grille */}
      <rect x="40" y="135" width="40" height="6" rx="1" fill="#000" stroke={accent} strokeWidth="0.4" opacity="0.7"/>
    </svg>
  );
}

/* Supra-style classic — taller greenhouse, softer curves */
function CarSupra({ style, accent = "#ff5656" }) {
  return (
    <svg viewBox="0 0 480 200" style={style} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sup-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a1010"/>
          <stop offset="50%" stopColor="#1a0606"/>
          <stop offset="100%" stopColor="#000"/>
        </linearGradient>
        <linearGradient id="sup-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#502525" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#000" stopOpacity="0.95"/>
        </linearGradient>
        <radialGradient id="sup-light">
          <stop offset="0%" stopColor="#fff5b8"/>
          <stop offset="60%" stopColor="#ffd76a"/>
          <stop offset="100%" stopColor="#ffd76a" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="180" rx="220" ry="9" fill="#000" opacity="0.7"/>
      <ellipse cx="50" cy="118" rx="80" ry="40" fill="url(#sup-light)" opacity="0.65"/>
      {/* MK4 Supra shape — long hood, fastback */}
      <path d="M 26 150 L 26 132 Q 26 118 48 110 L 90 96 Q 140 80 210 70 Q 290 62 360 78 Q 415 90 445 105 L 460 120 Q 462 134 462 152 L 460 168 Q 458 174 450 174 L 380 174 Q 376 160 360 160 Q 344 160 340 174 L 140 174 Q 136 160 120 160 Q 104 160 100 174 L 34 174 Q 26 174 26 168 Z"
            fill="url(#sup-body)" stroke={accent} strokeWidth="1.4"/>
      {/* fastback greenhouse — distinctive Supra silhouette */}
      <path d="M 110 96 Q 160 78 220 70 Q 300 64 360 78 Q 395 86 410 98 L 405 118 Q 380 106 290 100 Q 190 96 120 110 Z"
            fill="url(#sup-glass)" stroke={accent} strokeWidth="0.7" opacity="0.95"/>
      <path d="M 140 86 Q 220 72 300 72 Q 360 78 390 90" fill="none" stroke="#fff5b8" strokeWidth="0.8" opacity="0.55"/>
      {/* signature rear wing */}
      <path d="M 410 94 L 458 90 L 460 100 L 412 104 Z" fill="#000" stroke={accent} strokeWidth="0.6"/>
      <rect x="408" y="84" width="4" height="22" fill={accent} opacity="0.65"/>
      <rect x="455" y="80" width="4" height="22" fill={accent} opacity="0.65"/>
      {/* gold/red trim */}
      <path d="M 28 146 L 460 146" stroke={accent} strokeWidth="1.5" opacity="0.85"/>
      <path d="M 28 150 L 460 150" stroke="#ffd76a" strokeWidth="0.5" opacity="0.4"/>
      {/* side body line */}
      <path d="M 50 130 Q 240 122 440 132" fill="none" stroke="#fff" strokeWidth="0.4" opacity="0.15"/>
      {/* wheel arches */}
      <circle cx="115" cy="160" r="26" fill="#000"/>
      <circle cx="365" cy="160" r="26" fill="#000"/>
      <circle cx="115" cy="160" r="18" fill="#0a0907" stroke="#ffd76a" strokeWidth="0.7"/>
      <circle cx="365" cy="160" r="18" fill="#0a0907" stroke="#ffd76a" strokeWidth="0.7"/>
      <circle cx="115" cy="160" r="14" fill="none" stroke="#ffd76a" strokeWidth="3" opacity="0.55" strokeDasharray="3 6"/>
      <circle cx="365" cy="160" r="14" fill="none" stroke="#ffd76a" strokeWidth="3" opacity="0.55" strokeDasharray="3 6"/>
      <circle cx="115" cy="160" r="3.5" fill="#ffd76a"/>
      <circle cx="365" cy="160" r="3.5" fill="#ffd76a"/>
      {/* twin tail lamps */}
      <rect x="438" y="118" width="22" height="6" rx="1.5" fill={accent}/>
      <rect x="438" y="128" width="22" height="4" rx="1" fill="#ff8888" opacity="0.8"/>
      {/* headlights — rounded */}
      <ellipse cx="42" cy="120" rx="12" ry="5" fill="#fff5b8"/>
      <ellipse cx="58" cy="122" rx="10" ry="4" fill="#ffd76a"/>
      <path d="M 130 90 L 170 76 L 220 72 L 190 92 Z" fill="#fff" opacity="0.1"/>
    </svg>
  );
}

/* BMW-style coupe — boxier, kidney grille front */
function CarBMW({ style, accent = "#8cb4ff" }) {
  return (
    <svg viewBox="0 0 480 200" style={style} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bmw-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2540"/>
          <stop offset="50%" stopColor="#070a18"/>
          <stop offset="100%" stopColor="#000"/>
        </linearGradient>
        <linearGradient id="bmw-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a3a60" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#000" stopOpacity="0.95"/>
        </linearGradient>
        <radialGradient id="bmw-light">
          <stop offset="0%" stopColor="#fff"/>
          <stop offset="60%" stopColor="#cce0ff"/>
          <stop offset="100%" stopColor="#8cb4ff" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="180" rx="220" ry="9" fill="#000" opacity="0.7"/>
      <ellipse cx="55" cy="120" rx="80" ry="35" fill="url(#bmw-light)" opacity="0.7"/>
      {/* boxier coupe profile */}
      <path d="M 26 150 L 26 130 Q 26 118 46 110 L 88 92 Q 130 76 200 70 Q 280 65 350 76 Q 410 86 445 102 L 462 122 Q 464 136 464 152 L 462 168 Q 460 174 452 174 L 380 174 Q 376 160 360 160 Q 344 160 340 174 L 140 174 Q 136 160 120 160 Q 104 160 100 174 L 34 174 Q 26 174 26 168 Z"
            fill="url(#bmw-body)" stroke={accent} strokeWidth="1.4"/>
      {/* taller, more upright greenhouse */}
      <path d="M 100 92 Q 145 74 200 70 Q 280 66 345 76 Q 380 84 400 96 L 396 116 Q 360 104 280 100 Q 180 96 112 110 Z"
            fill="url(#bmw-glass)" stroke={accent} strokeWidth="0.7" opacity="0.95"/>
      <path d="M 130 84 Q 220 74 300 74 Q 360 80 390 90" fill="none" stroke="#cce0ff" strokeWidth="0.8" opacity="0.55"/>
      {/* M-stripe accent (blue/red) */}
      <path d="M 28 144 L 462 144" stroke={accent} strokeWidth="1.4" opacity="0.85"/>
      <path d="M 28 148 L 154 148" stroke="#5a82c4" strokeWidth="1.2" opacity="0.7"/>
      <path d="M 154 148 L 280 148" stroke="#3a5a98" strokeWidth="1.2" opacity="0.7"/>
      <path d="M 280 148 L 462 148" stroke="#ff5656" strokeWidth="1.2" opacity="0.6"/>
      {/* hofmeister kink at C-pillar */}
      <path d="M 388 96 Q 396 105 392 116" fill="none" stroke="#cce0ff" strokeWidth="0.6" opacity="0.4"/>
      {/* wheel arches */}
      <circle cx="115" cy="160" r="26" fill="#000"/>
      <circle cx="365" cy="160" r="26" fill="#000"/>
      <circle cx="115" cy="160" r="18" fill="#0a0907" stroke={accent} strokeWidth="0.7"/>
      <circle cx="365" cy="160" r="18" fill="#0a0907" stroke={accent} strokeWidth="0.7"/>
      <circle cx="115" cy="160" r="14" fill="none" stroke={accent} strokeWidth="3" opacity="0.55" strokeDasharray="3 6"/>
      <circle cx="365" cy="160" r="14" fill="none" stroke={accent} strokeWidth="3" opacity="0.55" strokeDasharray="3 6"/>
      <circle cx="115" cy="160" r="3.5" fill={accent}/>
      <circle cx="365" cy="160" r="3.5" fill={accent}/>
      {/* tail strip — thin BMW-style */}
      <rect x="440" y="120" width="22" height="3" rx="1" fill="#ff5656"/>
      <rect x="440" y="125" width="22" height="2" rx="1" fill="#ffaaaa" opacity="0.7"/>
      {/* angel-eye headlights */}
      <circle cx="44" cy="120" r="6.5" fill="none" stroke="#cce0ff" strokeWidth="2"/>
      <circle cx="44" cy="120" r="3" fill="#fff"/>
      <circle cx="62" cy="121" r="5.5" fill="none" stroke="#cce0ff" strokeWidth="1.7"/>
      <circle cx="62" cy="121" r="2.5" fill="#fff"/>
      {/* kidney grille hint */}
      <rect x="32" y="135" width="14" height="8" rx="1" fill="#000" stroke={accent} strokeWidth="0.5"/>
      <rect x="50" y="135" width="14" height="8" rx="1" fill="#000" stroke={accent} strokeWidth="0.5"/>
      <path d="M 130 90 L 170 78 L 210 76 L 180 94 Z" fill="#fff" opacity="0.08"/>
    </svg>
  );
}

function DriftScene() {
  return (
    <div className="drift-scene">
      <div className="drift-floor"/>
      {/* tire trails on floor */}
      <div className="tire-trail" style={{ bottom: "16%", left: "10%", width: "60%", transform: "rotate(-4deg)" }}/>
      <div className="tire-trail" style={{ bottom: "22%", left: "30%", width: "50%", transform: "rotate(-2deg)", opacity: 0.4 }}/>
      <div className="tire-trail" style={{ bottom: "12%", right: "5%", width: "45%", transform: "rotate(3deg)", opacity: 0.5 }}/>

      {/* Drifting cars — three different JDM silhouettes, varying blur depth */}
      <div className="drift-car drift-car-1"><CarGTR style={{ width: "100%", display: "block" }}/></div>
      <div className="drift-car drift-car-2"><CarSupra style={{ width: "100%", display: "block" }}/></div>
      <div className="drift-car drift-car-3"><CarBMW style={{ width: "100%", display: "block" }}/></div>

      {/* smoke clouds */}
      <div className="smoke" style={{ width: 260, height: 260, bottom: "10%", left: "6%", animationDelay: "0s" }}/>
      <div className="smoke" style={{ width: 200, height: 200, bottom: "20%", left: "20%", animationDelay: "1.5s" }}/>
      <div className="smoke" style={{ width: 280, height: 280, bottom: "22%", right: "8%", animationDelay: "0.8s" }}/>
      <div className="smoke" style={{ width: 220, height: 220, bottom: "8%", right: "26%", animationDelay: "2.2s" }}/>
      <div className="smoke" style={{ width: 180, height: 180, bottom: "32%", left: "42%", animationDelay: "3s" }}/>
      <div className="smoke" style={{ width: 240, height: 240, bottom: "5%", left: "55%", animationDelay: "4.2s" }}/>

      {/* speed light streaks */}
      <div className="light-streak" style={{ top: "18%", width: "30%", animationDelay: "0s" }}/>
      <div className="light-streak" style={{ top: "32%", width: "25%", animationDelay: "0.3s" }}/>
      <div className="light-streak" style={{ top: "52%", width: "35%", animationDelay: "0.7s" }}/>
      <div className="light-streak" style={{ top: "68%", width: "22%", animationDelay: "1.1s" }}/>
      <div className="light-streak" style={{ top: "82%", width: "28%", animationDelay: "1.4s" }}/>

      {/* sparks */}
      <div className="spark" style={{ bottom: "20%", left: "18%", animationDelay: "0s" }}/>
      <div className="spark" style={{ bottom: "26%", right: "22%", animationDelay: "1.2s" }}/>
      <div className="spark" style={{ bottom: "14%", left: "55%", animationDelay: "2.4s" }}/>
    </div>
  );
}

window.DriftScene = DriftScene;
