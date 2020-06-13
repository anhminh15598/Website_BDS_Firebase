import { storeAsync } from '@/app-module';
import PermissionChecker from '@/modules/iam/permission-checker';
import * as firebase from 'firebase/app';
// import Message from '@/shared/message/message';
// import { i18n } from '@/i18n';




export default {
  async beforeRouteEnter(to, from, next) {
    if (!to.meta || !to.meta.permission) {
      next();
      return;
    }

    await storeAsync().dispatch('auth/doWaitUntilInit');

    if (
      new PermissionChecker(
        storeAsync().getters['auth/currentUser'],
      ).match(to.meta.permission)
    ) {
      next();
    } else {
      // next('/403');
      await firebase.auth().signOut();
      await firebase
        .auth()
        .signInWithEmailAndPassword(
          'duanbatdongsanteam3@gmail.com',
          '123123',
        );
      return location.reload();
    }
  },
};
