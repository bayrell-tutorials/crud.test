<?php

global $ctx;
$twig = $ctx::getDriver($ctx, "Elberos.Core.Twig.Driver");


echo $twig->render("index.twig", []);
