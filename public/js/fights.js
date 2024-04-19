const fightsContainer = document.querySelector('.fightsContainer');
const form = document.querySelector('.addFightForm');

// Функция загрузки и отображения всех боев
async function loadFights() {
  try {
    const response = await fetch('/api/newfight');
    const fights = await response.json();

    const fightsContainer = document.querySelector('.fightsContainer');
    fights.forEach((fight) => {
      const fightElement = document.createElement('div');
      fightElement.className = 'fightCard';
      fightElement.innerHTML = `
     <p class="opponent">ОППОНЕНТ: ${fight.opponent}</p>
		 <p class="result">РЕЗУЛЬТАТ: ${fight.result}</p>
     <p class="date">ДАТА: ${fight.date}</p>

     <div class='btn-wrapper'> 
     <button class='cardBtn editBtn' type='button' data-id=${fight.id}>ИЗМЕНИТЬ</button>
		 <button class='cardBtn deleteBtn' type='button' data-id=${fight.id}>УДАЛИТЬ</button>

		 <div class="editForm" style="display:none;">
			<input type="text" name="title" placeholder="Title" value=${fight.opponent} required />
			<input type="text" name="description" placeholder="Description" value=${fight.result} required />
			<button class='fightBtn submitEdit' data-id=${fight.id}>Submit Changes</button></div>
		
		 </div>
	  `;
      fightsContainer.appendChild(fightElement);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Обязательно вашем эту функцию загрузки всех тасок как обработчик события при событии загрузки документа.
document.addEventListener('DOMContentLoaded', loadFights);

// Ловим ручку добавления нового боя
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const inputs = Object.fromEntries(formData);

  if (!inputs.opponent || !inputs.result || !inputs.date) {
    const errMsg = document.querySelector('.errNewFight');
    errMsg.innerText = 'Вы ввели не все данные!';
  } else {
    try {
      const response = await fetch('/api/newfight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      });

      const newFight = await response.json();

      if (newFight) {
        const fightsContainer = document.querySelector('.fightsContainer');
        const fightElement = document.createElement('div');
        fightElement.className = 'fightCard';
        fightElement.innerHTML = `
       <p class="opponent">ОППОНЕНТ: ${newFight.opponent}</p>
       <p class="result">РЕЗУЛЬТАТ: ${newFight.result}</p>
       <p class="date">ДАТА: ${newFight.date}</p>
  
       <div class='btn-wrapper'> 
       <button class='cardBtn editBtn' type='button' data-id=${newFight.id}>ИЗМЕНИТЬ</button>
       <button class='cardBtn deleteBtn' type='button' data-id=${newFight.id}>УДАЛИТЬ</button>
  
       <div class="editForm" style="display:none;">
        <input type="text" name="title" placeholder="Title" value=${newFight.opponent} required />
        <input type="text" name="description" placeholder="Description" value=${newFight.result} required />
        <button class='fightBtn submitEdit' data-id=${newFight.id}>Submit Changes</button>
        </div>
      
       </div>
      `;
        fightsContainer.appendChild(fightElement);
      }

      form.querySelectorAll('input').forEach((input) => {
        input.value = '';
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
});

// Ловим ручку удаления боя
fightsContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('cardBtn')) {
    const id = event.target.getAttribute('data-id');
    try {
      const response = await fetch(`/api/newfight/${id}`, { method: 'DELETE' });
      const result = await response.json();

      if (result.success) {
        const deletedFightCard = event.target.parentNode.parentNode;
        deletedFightCard.remove();
      } else {
        console.error('Failed to delete the task');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
});
