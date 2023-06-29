<?php

namespace Scandiweb\Products;

use Scandiweb\MainProductClass;
use Scandiweb\Database;

class Furniture extends MainProductClass
{

  public function save($data)
  {
    $this->setSku($data->sku);
    $this->setName($data->name);
    $this->setPrice($data->price);
    $this->setType($data->setType);
    $this->setHeight($data->parameters->height);
    $this->setWidth($data->parameters->width);
    $this->setLength($data->parameters->length);

    $database = new Database();
    $table = $this->getTable();

    $sql = "SELECT * FROM $table WHERE sku ='" . $this->getSku() . "'";
    $conn = $database->getConnection();
    $result = $conn->query($sql);

    if ($result->num_rows == 0) {
      $this->insertProducts();
    }
  }

  public function insertProducts()
  {
    $database = new Database();
    $table = $this->getTable();

    $sql = "INSERT INTO $table(sku, name, price, type, height, width, length) VALUES('" . $this->getSku() . "','" . $this->getName() . "','" . $this->getPrice() . "','" . $this->getType() . "','" . $this->getHeight() . "','" . $this->getWidth() . "','" . $this->getLength() . "')";
    $conn = $database->getConnection();
    $result = $conn->query($sql);

    if ($result) {
      $conn->close();
    } else {
      $error_message = 'Error inserting data: ' . $conn->error;
      error_log($error_message, 0);

      $conn->close();
    }
  }
}
