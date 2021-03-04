interface IMailConfig {
  driver: 'ethereal';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: 'ethereal',

  defaults: {
    from: {
      email: 'pablo@email.com',
      name: 'Pablo Ribeiro',
    },
  },
} as IMailConfig;
