<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5b5e9040ed7ae13124c8ab007d74d04e
{
    public static $prefixesPsr0 = array (
        'S' => 
        array (
            'Sunra\\PhpSimple\\HtmlDomParser' => 
            array (
                0 => __DIR__ . '/..' . '/sunra/php-simple-html-dom-parser/Src',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixesPsr0 = ComposerStaticInit5b5e9040ed7ae13124c8ab007d74d04e::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
