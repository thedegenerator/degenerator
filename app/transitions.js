const time = 500;
// const time2 = 500;
export default function(){
  // this.transition(
  //   this.fromRoute('degenerator.main'),
  //   this.toRoute('degenerator.degenerate'),
  //   this.use('crossFade', {
  //     use: [`flyTo`, { time }],
  //
  //   }),
  // );

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
