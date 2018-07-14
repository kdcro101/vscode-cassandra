import { TargetState, Transition, TransitionService, UIInjector, UIRouter } from "@uirouter/angular";

function setupAuthHook(transition: TransitionService) {
  const requiresAuthCriteria = { to: (state) => state.data && state.data.requiresAuth };

  const redirectToLogin = (currentTransition: Transition) => {
    return new Promise<boolean | TargetState>((resolve, reject) => {
          resolve(true);
    });
  };

  const transitionError = (currentTransition: Transition) => {
    // tslint:disable-next-line:max-line-length
    console.log("TRANSITION ERROR: %s %s->%s", (currentTransition as any)._error.message, currentTransition.$from().name, currentTransition.$to().name);
  };

  transition.onBefore(requiresAuthCriteria, redirectToLogin, { priority: 1 });
  transition.onError({}, transitionError);

  // trace.enable(1, 5);

  const unhook = transition.onSuccess(null, () => { }, { priority: 1 });
}

export function routerConfig(router: UIRouter, injector: UIInjector) {
  // router.plugin(StickyStatesPlugin);
  try {

    const transitionService = router.transitionService;
    // const ssw = injector.get(StateService);
    setupAuthHook(transitionService);

  } catch (e) {

    // console.log("COUGHT MOTHAFUCKA");
    console.log(e);
  }

}
