<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache




/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'k``ZgphLAIh:HH.:^P,CKth3cPF!^Hx~9=fdE?fTbGj=;jPN;[N.a[4J_nYCO#Si' );
define( 'SECURE_AUTH_KEY',   'd<#]u>|Mfwa<aq=r,|T.D_axY&s9dp|$6GgL+H3vQRXjYdIfTSp^x`ED>>4]4.vH' );
define( 'LOGGED_IN_KEY',     '6D[ K=z#P_mS/]a`A|+n{2USP@+S/Xi+3~GTFdoD8yldZeNjfeFmd:G)B-^3K#(>' );
define( 'NONCE_KEY',         'L/$Xv.]-dsG[I^Mcd,?zV`Wx$t]]:I)zhR$JSV3{bA;srZ_ZN s:oci(pi)-/lE&' );
define( 'AUTH_SALT',         'l,{b![wJ*ZE7T-[0LMeneDRM18DH4^Tn-1*KVZ{5sKSx^FS T@t/*GjWo8a^GP=a' );
define( 'SECURE_AUTH_SALT',  'h!^8bC=}5 3ed&d%Ipx4 J<:yX7BpFph|(Hd/2cnC~Y<Xr~m .[%jcJR9kNF:1{ ' );
define( 'LOGGED_IN_SALT',    'R0abcc!4E)4>8f| 8B6>;]9]bVsT p6M}kD=Sawhv:JenAQ2>Ls:Ei@RHLw@EoGc' );
define( 'NONCE_SALT',        'tbf5@g5uC_R9QH]2)evN~@w(=r:.sl-9M)|]7Gb*qJB1Cso@m(vOHL}M^,FM)=~2' );
define( 'WP_CACHE_KEY_SALT', '1.fS{G}IZc!l+b^y`8>Wa8E]:9:GrPHD,O579u!Qgc]TwrFCr`$$ i<1Wk>.k1Ea' );


define( 'WP_DEBUG_LOG', false );
// Disable display of errors and warnings
define( 'WP_DEBUG_DISPLAY', false );
// Use dev versions of core JS and CSS files (only needed if you are modifying these core files)
define( 'SCRIPT_DEBUG', true );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', true );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
