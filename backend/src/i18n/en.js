const en = {
  app: {
    title: 'Ứng dụng'
  },

  auth: {
    passwordReset: {
      error: `Email không được công nhận`,
    },
    emailAddressVerificationEmail: {
      error: `Email không được công nhận`,
    },
  },

  iam: {
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own owner permission`,
    },
  },

  importer: {
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  errors: {
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
  },

  emails: {
    invitation: {
      subject: `You've been invited to {0}`,
      body: `
        <p>Hello,</p>
        <p>You've been invited to {0}.</p>
        <p>Follow this link to register.</p>
        <p><a href="{1}">{1}</a></p>
        <p>Thanks,</p>
        <p>Your {0} team</p>
      `,
    },
    emailAddressVerification: {
      subject: `Xác nhận email của bạn cho {0}`,
      body: `
        <p>Xin chào,</p>
        <p>Theo liên kết này để xác minh địa chỉ email của bạn.</p>
        <p><a href='{0}'>{0}</a></p>
        <p>Nếu bạn không yêu cầu xác minh địa chỉ này, bạn có thể bỏ qua email này.</p>
        <p>Cảm ơn,</p>
        <p>Nhóm {1} của bạn</p>
      `,
    },
    passwordReset: {
      subject: `Đặt lại mật khẩu của bạn cho {0}`,
      body: `
        <p>Hello,</p>
        <p>Theo liên kết này để đặt lại mật khẩu {0} cho tài khoản {1} của bạn.</p>
        <p><a href='{2}'>{2}</a></p>
        <p>Nếu bạn không yêu cầu xác minh địa chỉ này, bạn có thể bỏ qua email này.</p>
        <p>Cảm ơn,</p>
        <p>Nhóm {0} của bạn</p>
      `,
    },
  },
};

module.exports = en;
