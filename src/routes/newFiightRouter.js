const router = require('express').Router();
const { Fight } = require('../../db/models');

// Ручка для отображения всех боев
module.exports = router.get('/', async (req, res) => {
  try {
    const fights = await Fight.findAll({ plaint: true });
    res.json(fights);
  } catch (err) {
    console.log('Error on newFightRouter.get() ====>>>>', err);
  }
});

// Ручка для добавления боя
router.post('/', async (req, res) => {
  try {
    const { opponent, result, date } = req.body;
    const newFight = await Fight.create({ opponent, result, date });
    res.json(newFight);
  } catch (err) {
    console.log('Error on newFightRouter.post() ====>>>>', err);
    res.status(500).send('Ошибка создания нового боя');
  }
});

// Ручка для удаления боя
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Fight.destroy({ where: { id } });
    res.json({ success: true, messageId: id });
  } catch (err) {
    console.log('Error on newFightRouter.delete() ====>>>>', err);
    res.status(500).json({ success: false, error: 'Error deleting task' });
  }
});

// Ручка изменения боя
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { opponent, result, date } = req.body;
    const fight = await Fight.findByPk(id);
    if (!fight) {
      return res.status(404).json({ error: 'Бой не найден' });
    }
    fight.opponent = opponent || fight.opponent;
    fight.result = result || fight.result;
    fight.date = date || fight.date;
    await fight.save();
    res.json(fight);
  } catch (err) {
    console.log(`Error on newFightRouter.patch(${id}) ====>>>>`, err);
    res.status(500).json({ error: 'Ошибка редактирования боя' });
  }
});
