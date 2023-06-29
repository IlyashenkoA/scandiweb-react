<?php

namespace Scandiweb;

class Database
{
    private $servername, $username, $password, $dbname;
    private $conn;

    public function __construct()
    {
        $this->servername = $_ENV['PUBLIC_URL'];
        $this->username = $_ENV['USERNAME'];
        $this->password = $_ENV['PASSWORD'];
        $this->dbname = $_ENV['DB_NAME'];

        $this->conn = new \mysqli($this->servername, $this->username, $this->password, $this->dbname);

        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_errno);
        }
    }

    public function getConnection()
    {
        return $this->conn;
    }
}
