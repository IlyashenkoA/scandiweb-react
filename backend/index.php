<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

require './autoload.php';

use Scandiweb\Products\DVD;

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
