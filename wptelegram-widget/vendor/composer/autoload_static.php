<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit799b2356f62678a5ac7b806e8da0ec37
{
    public static $files = array (
        '0d252e6134999215031cdb0e94a79cd5' => __DIR__ . '/..' . '/wpsocio/wptelegram-bot-api/init.php',
    );

    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WPTelegram\\BotAPI\\' => 18,
            'WPSocio\\WPUtils\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WPTelegram\\BotAPI\\' => 
        array (
            0 => __DIR__ . '/..' . '/wpsocio/wptelegram-bot-api/src',
        ),
        'WPSocio\\WPUtils\\' => 
        array (
            0 => __DIR__ . '/..' . '/wpsocio/wp-utils/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit799b2356f62678a5ac7b806e8da0ec37::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit799b2356f62678a5ac7b806e8da0ec37::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit799b2356f62678a5ac7b806e8da0ec37::$classMap;

        }, null, ClassLoader::class);
    }
}
