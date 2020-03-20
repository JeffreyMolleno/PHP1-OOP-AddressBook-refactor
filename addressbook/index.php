<?php error_reporting(1); ?>

<?php
//Inlude the Query class here ..

$self = $_SERVER['PHP_SELF'];

//Default methods

/**
	display()
	insert($_GET)
	update($id,$_GET)
	delete($id)
 */
	
?>
<!-- Your HTML below php code-->

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php include_once 'Includes/styles.inc.php'; ?>
	<link rel="stylesheet" href="Includes/styles.css">
	<title>Address Book</title>
</head>

<body>
	<nav class="navbar navbar-dark bg-primary">
		<!-- Navbar content -->
		<a class="navbar-brand" href="#"><i class="fa fa-phone-square"></i> &nbsp Adress Book</a>
		<ul class="navbar-nav my-2 my-lg-0 menu-list">
			<li class="nav-item logout"	 name="logout"><a href="?logout=true">Logout</a></li>
		</ul>
	</nav>

	<div class="table-container">
		<button tabindex="-1" type="button" class="insert-btn btn btn-primary" data-toggle="modal" data-target="#update-modal">INSERT NEW DATA</button>
		<table class="table table-hover">
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Contact</th>
					<th scope="col">Email</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>
			<tbody class="table-data-row">
				<?php

				include_once './Objects/Query.php';
				$contacts = new Query();

				foreach ($contacts->display() as $cdetails) {
					echo '<tr>
								<th id="name">' . $cdetails->name . '</th>
								<th id="phone">' . $cdetails->phone . '</th>
								<th id="email">' . $cdetails->email . '</th>
								<th>
									<button tabindex="-1" data-id="' . $cdetails->id . '" type="button" class="edit-btn btn btn-success" data-toggle="modal" data-target="#update-modal">UPDATE</button>
									<button tabindex="-1" data-id="' . $cdetails->id . '" type="button" class="delete-btn btn btn-danger">DELETE</button></th>
								</th>
							</tr>';
				}
				?>
			</tbody>
		</table>
	</div>


	<div class="modal fade" id="update-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Contact Form</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form id="add-contacts-form" name="add-contacts-form" method="post" action="#">
						<div class="form-group">
							<label for="name-input">Name</label>
							<input type="text" class="form-control" id="name-input" name="name-input">
						</div>


						<div class="form-group">
							<label for="contact-number">Contact Number</label>
							<input type="tel" title="Input valid contact number" pattern="[0-9\-]+" class="form-control" id="contact-number" name="contact-number">
						</div>

						<div class="form-group">
							<label for="email">Email</label>
							<input type="email" class="form-control" id="email-input" name="email-input">
						</div>

						<div class="form-group">
							<input type="hidden" class="form-control" id="edit-id" name="edit-id">
						</div>

						<input type="hidden" id="edit-val-id-pass" name="edit-val-id-pass">

						<input type="hidden" id="delete-val-id-pass" name="delete-val-id-pass">

						<div class="form-submit">

							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

							<button type="submit" class="submit-btn btn btn-primary" id="submit-btn">Submit</button>

						</div>
					</form>
				</div>
				<div class="modal-footer">
				</div>
			</div>
		</div>
	</div>
	</body>
</html>