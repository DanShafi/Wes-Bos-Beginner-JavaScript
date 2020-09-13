const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });
  e.currentTarget.setAttribute('aria-selected', true);
  const { id } = e.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
}

tabButtons.forEach(btn => btn.addEventListener('click', handleTabClick));
