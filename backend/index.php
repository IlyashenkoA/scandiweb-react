<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

require './autoload.php';
require __DIR__ . '/vendor/autoload.php';

use Scandiweb\Products\DVD;
use Dotenv;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
  case 'GET':
    $product = new DVD();
    echo $product->getProducts();

    break;
  case 'POST':
    $product = json_decode(file_get_contents('php://input'));

    $classNamespace = 'Scandiweb\Products\\' . $product->type;
    $productClass = new $classNamespace();
    $productClass->save($product);

    break;
  case 'DELETE':
    $listOfSku = (file_get_contents('php://input'));

    $product = new DVD();
    $product->delete($listOfSku);

    break;
}
