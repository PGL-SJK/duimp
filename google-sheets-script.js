// ====================================
// GOOGLE APPS SCRIPT - CÓDIGO PARA GOOGLE SHEETS
// ====================================
// 
// INSTRUÇÕES:
// 1. Abra sua planilha no Google Sheets
// 2. Vá em: Extensões > Apps Script
// 3. Cole este código completo
// 4. Clique em "Implantar" > "Nova implantação"
// 5. Tipo: "Aplicativo da web"
// 6. Execute como: "Eu"
// 7. Quem tem acesso: "Qualquer pessoa"
// 8. Copie a URL gerada e cole no arquivo script.js
//
// ====================================

// Nome da aba onde os dados serão salvos
const SHEET_NAME = 'Inscrições';

// Função principal que recebe os dados do formulário
function doPost(e) {
  try {
    // Parse dos dados recebidos
    const data = JSON.parse(e.postData.contents);
    
    // Pegar ou criar a planilha
    const sheet = getOrCreateSheet();
    
    // Adicionar os dados
    const row = [
      new Date(), // Timestamp
      data.dataInscricao || new Date().toLocaleString('pt-BR'),
      data.nomeEmpresa || '',
      data.email || '',
      data.telefone || '',
      data.participantes || 0,
      data.dataPreferida || '',
      data.observacoes || ''
    ];
    
    sheet.appendRow(row);
    
    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log do erro
    console.error('Erro ao processar formulário:', error);
    
    // Retornar erro
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função GET para testar se o script está funcionando
function doGet(e) {
  return ContentService
    .createTextOutput('Google Apps Script está funcionando! Configure o formulário para usar POST.')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Função para pegar ou criar a planilha com cabeçalhos
function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  // Se a planilha não existir, criar
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    
    // Adicionar cabeçalhos
    const headers = [
      'Timestamp',
      'Data/Hora Inscrição',
      'Nome da Empresa',
      'E-mail',
      'Telefone',
      'Qtd. Participantes',
      'Data Preferida',
      'Observações'
    ];
    
    sheet.appendRow(headers);
    
    // Formatar cabeçalhos
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#2d5a2d');
    headerRange.setFontColor('#ffffff');
    headerRange.setFontWeight('bold');
    headerRange.setHorizontalAlignment('center');
    
    // Ajustar largura das colunas
    sheet.setColumnWidth(1, 180); // Timestamp
    sheet.setColumnWidth(2, 180); // Data/Hora
    sheet.setColumnWidth(3, 250); // Nome da Empresa
    sheet.setColumnWidth(4, 200); // E-mail
    sheet.setColumnWidth(5, 150); // Telefone
    sheet.setColumnWidth(6, 120); // Qtd. Participantes
    sheet.setColumnWidth(7, 120); // Data Preferida
    sheet.setColumnWidth(8, 300); // Observações
    
    // Congelar primeira linha
    sheet.setFrozenRows(1);
  }
  
  return sheet;
}

// Função para enviar notificação por email (opcional)
function enviarNotificacao(data) {
  const emailDestino = 'seu-email@exemplo.com'; // CONFIGURE SEU EMAIL AQUI
  
  const assunto = `Nova Inscrição - Evento DUIMP - ${data.nomeEmpresa}`;
  
  const corpo = `
    Nova inscrição recebida para o evento DUIMP!
    
    📋 Detalhes da Inscrição:
    
    Empresa: ${data.nomeEmpresa}
    E-mail: ${data.email}
    Telefone: ${data.telefone}
    Quantidade de Participantes: ${data.participantes}
    Data Preferida: ${data.dataPreferida}
    
    Observações: ${data.observacoes || 'Nenhuma'}
    
    Data da Inscrição: ${data.dataInscricao}
    
    ---
    Esta é uma notificação automática do sistema de inscrições.
  `;
  
  try {
    MailApp.sendEmail(emailDestino, assunto, corpo);
  } catch (error) {
    console.error('Erro ao enviar email:', error);
  }
}

// Se quiser ativar notificações por email, descomente a linha abaixo na função doPost:
// enviarNotificacao(data);