<?php

$pdo = new PDO(
    'mysql:host=localhost;dbname=seja_fluente;charset=utf8mb4',
    'root',
    ''
);

$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$motivo = $_POST['motivo'];
$nivel = $_POST['nivel'];
$mensagem = $_POST['mensagem'];

$stmt = $pdo->prepare(
    "INSERT INTO leads (nome, telefone, motivo, nivel, mensagem) VALUES (:nome, :telefone, :motivo, :nivel, :mensagem)"
);

$stmt->execute([
    'nome' => $nome,
    'telefone' => $telefone,
    'motivo' => $motivo,
    'nivel' => $nivel,
    'mensagem' => $mensagem
]);

echo "Lead salvo!";