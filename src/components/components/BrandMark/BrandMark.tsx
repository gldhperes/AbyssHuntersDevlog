import styles from "./BrandMark.module.css";

type BrandMarkProps = {
    className?: string;
    /** Decorative by default; pass a title for standalone use. */
    label?: string;
};

export default function BrandMark({ className, label }: BrandMarkProps) {
    return (
        // <svg
        //   className={[styles.mark, className].filter(Boolean).join(" ")}
        //   viewBox="0 0 48 48"
        //   role={label ? "img" : undefined}
        //   aria-label={label}
        //   aria-hidden={label ? undefined : true}
        //   focusable="false"
        // >
        //   <title>{label}</title>
        //   <path className={styles.outer} d="M24 3 44 24 24 45 4 24 24 3Z" />
        //   <path className={styles.inner} d="M24 12 35 24 24 36 13 24 24 12Z" />
        //   <path className={styles.vein} d="M24 6.5v35" />
        //   <circle className={styles.core} cx="24" cy="24" r="2.6" />
        // </svg>



        <svg
            className={[styles.mark, className].filter(Boolean).join(" ")}
            viewBox="0 0 100 100"
            role={label ? "img" : undefined}
            aria-label={label}
            aria-hidden={label ? undefined : true}
            focusable="false"
        >
            {label && <title>{label}</title>}

            {/* Lâmina central */}
            <path
                className={styles.outer}
                fillRule="evenodd"
                d="
          M50 0
          L60 22
          L59 27
          L69 43
          L63 48
          L69 53
          L61 59
          L58 72
          L50 100
          L42 72
          L39 59
          L31 53
          L37 48
          L31 43
          L41 27
          L40 22
          Z

          M50 28
          L57 49
          L50 57
          L43 49
          Z
        "
            />

            {/* Fenda central */}
            <path
                className={styles.vein}
                d="M50 8 L50 91"
            />

            {/* Asa esquerda */}
            <path
                className={styles.outer}
                fillRule="evenodd"
                d="
          M0 20
          L19 39
          L31 32
          L29 48
          L34 55
          L31 64
          L42 80
          L35 70
          L24 62
          L13 57
          L12 49
          Z

          M20 48
          L25 51
          L24 56
          L19 53
          Z
        "
            />

            {/* Asa direita */}
            <path
                className={styles.outer}
                fillRule="evenodd"
                transform="translate(100 0) scale(-1 1)"
                d="
          M0 20
          L19 39
          L31 32
          L29 48
          L34 55
          L31 64
          L42 80
          L35 70
          L24 62
          L13 57
          L12 49
          Z

          M20 48
          L25 51
          L24 56
          L19 53
          Z
        "
            />
        </svg>
  );
}