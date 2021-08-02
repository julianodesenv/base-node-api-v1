class HomeController {
  index(req, res) {
    res.json('Rodando');
  }
}

export default new HomeController();
