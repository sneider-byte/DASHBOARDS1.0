document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. INICIALIZACIÓN DE GRÁFICOS CON CHART.JS
  // -------------------------------------------------------------
  
  // Gráfico 1: Consumo de Combustible (Línea)
  const ctxCombustible = document.getElementById('chartCombustible');
  if (ctxCombustible) {
    new Chart(ctxCombustible, {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
          label: 'Gasto en USD ($)',
          data: [9800, 10500, 11200, 10800, 11900, 12450],
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { grid: { color: '#f1f5f9' } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  // Gráfico 2: Distribución de Estados (Dona)
  const ctxEstados = document.getElementById('chartEstados');
  if (ctxEstados) {
    new Chart(ctxEstados, {
      type: 'doughnut',
      data: {
        labels: ['En Ruta', 'En Taller', 'Disponible'],
        datasets: [{
          data: [28, 6, 14],
          backgroundColor: ['#10b981', '#f59e0b', '#2563eb'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { font: { size: 11 } }
          }
        },
        cutout: '70%'
      }
    });
  }

  // -------------------------------------------------------------
  // 2. BUSCADOR EN TIEMPO REAL
  // -------------------------------------------------------------
  const searchInput = document.getElementById('search-input');
  const tableRows = document.querySelectorAll('.data-table tbody tr');

  if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
      const term = e.target.value.toLowerCase();

      tableRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(term) ? '' : 'none';
      });
    });
  }

  // -------------------------------------------------------------
  // 3. FILTRO POR TARJETAS DE MÉTRICAS (KPIs)
  // -------------------------------------------------------------
  const cards = document.querySelectorAll('.card');

  cards.forEach((card, index) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      cards.forEach(c => c.style.border = 'none');
      card.style.border = '2px solid #2563eb';

      tableRows.forEach(row => {
        const statusPill = row.querySelector('.status-pill');
        if (!statusPill) return;

        const statusText = statusPill.textContent.trim().toLowerCase();

        if (index === 0) {
          row.style.display = '';
        } else if (index === 1 && statusText === 'en ruta') {
          row.style.display = '';
        } else if (index === 2 && statusText === 'en taller') {
          row.style.display = '';
        } else if (index === 3 && statusText === 'disponible') {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });

  // -------------------------------------------------------------
  // 4. COLAPSO Y DESPLEGABLE DEL MENÚ
  // -------------------------------------------------------------
  const toggleBtn = document.getElementById('toggle-sidebar');
  const dashboardLayout = document.querySelector('.dashboard-layout');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      dashboardLayout.classList.toggle('sidebar-collapsed');
    });
  }

  // -------------------------------------------------------------
  // 5. ACCIÓN DE BOTONES DE LA TABLA
  // -------------------------------------------------------------
  const actionButtons = document.querySelectorAll('.btn-action');

  actionButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const row = e.target.closest('tr');
      const placa = row.cells[0].innerText;
      const modelo = row.cells[1].innerText;
      const conductor = row.cells[2].innerText;

      alert(`Detalles del Vehículo:\n\nPlaca: ${placa}\nModelo: ${modelo}\nConductor: ${conductor}`);
    });
  });
});