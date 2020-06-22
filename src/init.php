<?php

namespace App;

define ('ROOT_PATH', dirname(__DIR__));
ini_set('display_errors', 'on');
ini_set('html_errors', 'on');
set_time_limit(300);

require ROOT_PATH . "/vendor/autoload.php";


use Elberos\Core\CoreProvider;


class App extends \Elberos\Core\Context
{
	
	/**
	 * Get settings
	 */
	static function getSettings($env)
	{
		return $env;
	}
	
	
	
	/**
	 * Init context
	 */
	static function init($ctx)
	{
		/* Declare providers */
		$providers = [
			"Elberos.Orm.Connection" => new CoreProvider([
				"name" => "Elberos.Orm.Connection",
				"value" => "Elberos.Orm.Mysql.Connection",
			]),
			"App.Parser" => new CoreProvider([
				"name" => "App.Parser",
				"value" => "App.Parser",
			])
		];
		
		/* Declare drivers */
		$drivers = [
			"Elberos.Core.Twig.Driver" => new \Elberos\Core\TwigDriver($ctx),
			"Elberos.Orm.Mysql.Driver" => new \Elberos\Orm\Mysql\Driver($ctx),
		];
		
		return $ctx->copy([
			"providers" => $providers,
			"drivers" => $drivers,
		]);
	}
	
	
	/**
	 * Log
	 */
	static function log($ctx, $s)
	{
		$time = gmdate("Y-m-d H:i:s");
		echo "[".$time."] ".$s."\n";
	}
	
}


/* Include enviroments */
$env = include ROOT_PATH . "/env.php";


/* Create app */
global $ctx;
$ctx = App::create($env);
$ctx = App::setRootPath($ctx, ROOT_PATH);
$ctx = App::init($ctx);
$ctx = App::start($ctx);


/* Include app */
include "app.php";
