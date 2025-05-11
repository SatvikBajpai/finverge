export function Logo() {
  return (
    <div className="flex items-center">
      <svg
        width="180"
        height="108"
        viewBox="0 0 506 506"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform origin-left transition-all duration-300 ease-in-out scale-75 md:scale-85 lg:scale-90 hover:scale-85 md:hover:scale-90 lg:hover:scale-100"
      >
        {/* Base/Shadow */}
        <path
          d="M168.159 356C166.955 355.994 165.762 356.289 164.648 356.866C163.535 357.444 162.523 358.294 161.672 359.367C160.821 360.44 160.146 361.715 159.688 363.118C159.229 364.521 158.995 366.025 159 367.543C159.004 369.053 159.244 370.547 159.707 371.941C160.17 373.334 160.845 374.599 161.696 375.663C162.546 376.727 163.555 377.569 164.664 378.142C165.773 378.714 166.961 379.006 168.159 379H368.841C370.04 379.006 371.227 378.714 372.336 378.141C373.445 377.569 374.454 376.726 375.304 375.662C376.155 374.599 376.831 373.334 377.293 371.941C377.756 370.547 377.996 369.053 378 367.543C378.005 366.025 377.771 364.522 377.312 363.118C376.854 361.715 376.18 360.441 375.328 359.368C374.477 358.295 373.465 357.445 372.352 356.867C371.239 356.289 370.045 355.994 368.841 356H168.159Z"
          fill="#7A7777"
          fillOpacity="0.6"
        />

        {/* Animated Bars */}
        {/* Bar 1 */}
        <rect x="332" y="200" width="46" height="164" fill="#E8E5E5" opacity="0.85">
          <animate
            attributeName="height"
            values="164;140;164;150;164"
            dur="6s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animate
            attributeName="y"
            values="200;224;200;214;200"
            dur="6s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </rect>

        {/* Bar 2 */}
        <rect x="260" y="261" width="46" height="95" fill="#E8E5E5" opacity="0.85">
          <animate
            attributeName="height"
            values="95;75;95;85;95"
            dur="6.7s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animate
            attributeName="y"
            values="261;281;261;271;261"
            dur="6.7s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </rect>

        {/* Bar 3 */}
        <rect x="196" y="282" width="46" height="74" fill="#E8E5E5" opacity="0.85">
          <animate
            attributeName="height"
            values="74;54;74;64;74"
            dur="6.2s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
          />
          <animate
            attributeName="y"
            values="282;302;282;292;282"
            dur="6.2s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </rect>

        {/* FX Logo */}
        <path
          d="M331.36 379.2L266.848 200H307.808L355.168 340.288L403.04 200H443.744L378.976 379.2H331.36Z"
          fill="#1C2E5C"
        >
          {/* Add subtle pulse effect to the X */}
          <animate attributeName="fill" values="#1C2E5C;#253E7D;#1C2E5C" dur="4s" repeatCount="indefinite" />
        </path>

        <path d="M159 379V199.8H278.04V230.776H197.4V274.296H260.888V304.248H197.4V379H159Z" fill="#1C2E5C">
          {/* Add subtle pulse effect to the F */}
          <animate attributeName="fill" values="#1C2E5C;#253E7D;#1C2E5C" dur="4s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  )
}

