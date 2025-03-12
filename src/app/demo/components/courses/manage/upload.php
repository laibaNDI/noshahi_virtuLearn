<?php
$allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['fileUpload'])) {
    $file = $_FILES['fileUpload'];
    if (!in_array($file['type'], $allowedTypes)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid file type']);
        exit;
    }

    $uploadDir = './uploads/';
    $filePath = $uploadDir . basename($file['name']);

    if (move_uploaded_file($file['tmp_name'], $filePath)) {
        echo json_encode(['message' => 'File uploaded successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'File upload failed']);
    }
}
?>
