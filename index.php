<?php
	class Conmysql {
		public $servername;
		public $username;
		public $password;
		public $dbname;
		public $con = "";

		public function __construct($servername, $username, $password, $dbname){
	        $this->servername = $servername;
	        $this->username = $username;
	        $this->password = $password;
	        $this->dbname = $dbname;
	    }

	    public function getConnection() {
	    	try {
			    $this->con = new PDO("mysql:host=$this->servername;dbname=$this->dbname", $this->username, $this->password);
			}
			catch(PDOException $e)
			{	

			    echo $e->getMessage();
			}
	    }

	    public function updateData($sql) {
	    	if ($this->con == null) {
	    		$this->getConnection();
	    	}
    		$res = $this->con->exec($sql);
    		$this->closeConnection();	
	    }

	    public function closeConnection() {
	    	$this->con = null;
	    }
	}

	class realConn extends Conmysql
	{
		
		public function __construct($servername, $username, $password, $dbname){
	       parent:: __construct($servername, $username, $password, $dbname);
	    }

	    public function update() {
	    	$sql = "UPDATE `test` SET `num`=num + 1 WHERE id = 1";
	    	$this->updateData($sql);
	    }
	}


	$praise = new realConn('localhost', 'root', '', 'praise');

	$praise->update();

?>