const time = 500;
const time2 = 2000;
export default function(){
  this.transition(
    this.fromRoute('degenerator.main'),
    this.toRoute('degenerator.upload'),
    this.use('toLeft', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('fade', {
      use: [`flyTo`, { time2 }],
    })
  );

this.transition(
  this.fromRoute('degenerator.main'),
  this.toRoute('degenerator.degenerate'),
  this.use(`explode`, {
    matchBy: `data-lf`,
    use: [`flyTo`, { time }],
  }, {
    use: [`toDown`, { time }],
  }),
  this.reverse('toUp'),
  // this.reverse(`explode`, {
  //   matchBy: `data-lf`,
  //   use: [`flyTo`, { time2 }],
  // }, {
  //   use: [`toRight`, { time2 }],
  // })
);

}
