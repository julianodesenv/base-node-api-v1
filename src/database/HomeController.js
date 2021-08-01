import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Juliano',
      sobrenome: 'Monteiro',
      email: 'aaa@aa.com',
      idade: 29,
      peso: 84,
      altura: 1.8,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
