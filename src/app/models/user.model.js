export function UserModel($resource, baseParams) {
  'ngInject'

  let model = $resource(
      baseParams.apiUrl + 'users/:id/:action/:actionTwo/:actionThree/:actionFour/',
      { id: '@id', action: '@action', actionTwo: '@actionTwo' },
      {
        save: {
          method: 'PUT',
        },
        update: {
          method: 'PUT',
        }
      }
  );

  return model;
}