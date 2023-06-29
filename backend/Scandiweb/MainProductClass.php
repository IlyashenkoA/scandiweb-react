<?php

namespace Scandiweb;

abstract class MainProductClass
{
  private $sku, $name, $price, $type;
  private $size;
  private $weight;
  private $height, $width, $length;

  private $table = "products";


  public function setSku($sku)
  {
    $this->sku = $sku;
  }

  public function getSku()
  {
    return $this->sku;
  }

  public function setName($name)
  {
    $this->name = $name;
  }

  public function getName()
  {
    return $this->name;
  }

  public function setPrice($price)
  {
    $this->price = $price;
  }

  public function getPrice()
  {
    return $this->price;
  }

  public function setType($type)
  {
    $this->type = $type;
  }

  public function getType()
  {
    return $this->type;
  }

  public function setWeight($weight)
  {
    $this->weight = $weight;
  }

  public function getWeight()
  {
    return $this->weight;
  }

  public function setSize($size)
  {
    $this->size = $size;
  }

  public function getSize()
  {
    return $this->size;
  }

  public function setHeight($height)
  {
    $this->height = $height;
  }

  public function getHeight()
  {
    return $this->height;
  }

  public function setWidth($width)
  {
    $this->width = $width;
  }

  public function getWidth()
  {
    return $this->width;
  }

  public function setLength($length)
  {
    $this->length = $length;
  }

  public function getLength()
  {
    return $this->length;
  }

  public function getTable()
  {
    return $this->table;
  }

  public function getAll()
  {
    return "SELECT * FROM $this->table";
  }

  abstract public function insertProducts();

  abstract public function save($data);

  public function delete($listOfSku)
  {
    if (count(json_decode($listOfSku)) > 0) {
      $database = new Database();
      $conn = $database->getConnection();

      $table = $this->getTable();
      $rows = implode("', '", json_decode($listOfSku));

      $sql = "DELETE FROM $table WHERE sku IN ('$rows')";

      $conn->query($sql);
      $conn->close();
    }
  }

  public function getProducts()
  {
    $database = new Database();

    $conn = $database->getConnection();
    $result = $conn->query($this->getAll());

    $products = array();

    foreach ($result as $row) {
      $products[] = $row;
    }

    return json_encode($products);
  }
}
