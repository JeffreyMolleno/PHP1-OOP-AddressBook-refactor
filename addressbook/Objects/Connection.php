<?php 

//Include Interface Iconnect here..
include_once 'IConnect.php';

Class Connection implements IConnect {

	//Variables
	private $host = "localhost", 
			$dbname = "address_book_db", 
			$user = "root", 
			$pass = "", 
			$db, 
			$dsn, 
			$pdo;

	public function __construct(){
		$this->db_init();
	}

	//Add your methods below
	public function db_init(){
		$this->dsn = 'mysql:host='. $this->host . ';dbname='.$this->dbname;
		$this->pdo = new PDO($this->dsn, $this->user, $this->pass);
		$this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
		$this->pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
	}

	public function getPDO(){
		return $this->pdo;
	}
}
