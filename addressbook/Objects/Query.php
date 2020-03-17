<?php

//Include Connection class here..
include_once 'Connection.php';

class Query extends Connection
{

	public function __construct()
	{
		parent::__construct();
	}

	public function display()
	{
		//your select code here
		$stmt = $this->getPDO()->prepare('SELECT * FROM address');
		$stmt->execute();
		return $stmt->fetchAll();
	}

	public function insert($get)
	{
		//   your insert code here
		$stmt = $this->getPDO()->prepare('INSERT INTO address( name, phone, email) VALUES ( ?, ?, ?)');
		$stmt->execute([$get['name'], $get['phone'], $get['email']]);
		return true;
	}

	public function update($id, $get)
	{
		//your update code here
		$stmt = $this->getPDO()->prepare('UPDATE address SET name = ? , phone = ?, email = ? WHERE id = ?');
		$stmt->execute([$get['name'], $get['phone'], $get['email'], $get['id']]);
		return true;
	}

	public function delete($id)
	{
		//your delete code
	}
}
