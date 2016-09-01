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
    this.fromRoute('degenerator.index'),
    this.toRoute('degenerator.main'),
    this.use('toDown', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('toRight', {
      use: [`flyTo`, { time2 }],
    })
  );
  this.transition(
    this.fromRoute('degenerator.index'),
    this.toRoute('degenerator.upload'),
    this.use('toUp', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('toLeft', {
      use: [`flyTo`, { time2 }],
    })
  );
  this.transition(
    this.fromRoute('degenerator.index'),
    this.toRoute('degenerator.login'),
    this.use('crossFade', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('fade', {
      use: [`flyTo`, { time2 }],
    })
  );
  this.transition(
    this.fromRoute('degenerator.index'),
    this.toRoute('degenerator.register'),
    this.use('crossFade', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('fade', {
      use: [`flyTo`, { time2 }],
    })
  );
  this.transition(
    this.fromRoute('degenerator.login'),
    this.toRoute('degenerator.register'),
    this.use('toUp', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('toDown', {
      use: [`flyTo`, { time2 }],
    })
  );
  this.transition(
    this.fromRoute('degenerator.login'),
    this.toRoute('degenerator.upload'),
    this.use('toLeft', {
      use: [`flyTo`, { time }],
    }),
    this.reverse('toRight', {
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
  this.reverse('toDown'),
  // this.reverse(`explode`, {
  //   matchBy: `data-lf`,
  //   use: [`flyTo`, { time2 }],
  // }, {
  //   use: [`toRight`, { time2 }],
  // })
);
this.transition(
  this.fromRoute('degenerator.degenerate'),
  this.toRoute('degenerator.destroyed'),
  this.use(`explode`, {
    matchBy: `data-lf`,
    use: [`flyTo`, { time }],
  }, {
    use: [`toDown`, { time }],
  }),
);

}
