const ptBR = {
  common: {
    or: 'or',
    cancel: 'Hủy',
    reset: 'Đặt lại',
    save: 'Lưu',
    search: 'Tìm kiếm',
    edit: 'Sửa',
    remove: 'Remove',
    new: 'Thêm mới',
    export: 'Xuất sang Excel',
    noDataToExport: 'Không có dữ liệu để xuất',
    import: 'Import',
    discard: 'Xóa bỏ',
    yes: 'Đồng ý',
    no: 'Từ chối',
    pause: 'Tạm ngừng',
    areYouSure: 'Bạn có chắc không?',
    view: 'View',
    destroy: 'Xóa',
    mustSelectARow: 'Phải chọn một hàng',
    confirm: 'Xác nhận',
  },

  app: {
    title: 'Website quản lý công ty BĐS',
  },

  entities: {
    customers: {
      name: 'customers',
      label: 'Customers',
      menu: 'Customers',
      exporterFileName: 'customers_export',
      list: {
        menu: 'Customers',
        title: 'Customers',
      },
      create: {
        success: 'Customer saved successfully',
      },
      update: {
        success: 'Customer saved successfully',
      },
      destroy: {
        success: 'Customer deleted successfully',
      },
      destroyAll: {
        success: 'Customer(s) deleted successfully',
      },
      edit: {
        title: 'Edit Customer',
      },
      fields: {
        maNV: 'Mã nhân viên',
        hoTenNV: 'Họ tên nhân viên',
        chucDanh: 'Chức danh',
        boPhan: 'Bộ phận',
        nhom: 'Nhóm',
        quy1: 'Qúy 1',
        quy2: 'Qúy 2',
        quy3: 'Qúy 3',
        quy4: 'Qúy 4',
        thang01: 'Tháng 1',
        thang02: 'Tháng 2',
        thang03: 'Tháng 3',
        thang04: 'Tháng 4',
        thang05: 'Tháng 5',
        thang06: 'Tháng 6',
        thang07: 'Tháng 7',
        thang08: 'Tháng 8',
        thang09: 'Tháng 9',
        thang10: 'Tháng 10',
        thang11: 'Tháng 11',
        thang12: 'Tháng 12',
        tuan01: 'Tuần 01',
        tuan02: 'Tuần 02',
        tuan03: 'Tuần 03',
        tuan04: 'Tuần 04',
        tuan05: 'Tuần 05',
        tuan06: 'Tuần 06',
        tuan07: 'Tuần 07',
        tuan08: 'Tuần 08',
        tuan09: 'Tuần 09',
        tuan10: 'Tuần 10',
        tuan11: 'Tuần 11',
        tuan12: 'Tuần 12',
        tuan13: 'Tuần 13',
        tuan14: 'Tuần 14',
        tuan15: 'Tuần 15',
        tuan16: 'Tuần 16',
        tuan17: 'Tuần 17',
        tuan18: 'Tuần 18',
        tuan19: 'Tuần 19',
        tuan20: 'Tuần 20',
        tuan21: 'Tuần 21',
        tuan22: 'Tuần 22',
        tuan23: 'Tuần 23',
        tuan24: 'Tuần 24',
        tuan25: 'Tuần 25',
        tuan26: 'Tuần 26',
        tuan27: 'Tuần 27',
        tuan28: 'Tuần 28',
        tuan29: 'Tuần 29',
        tuan30: 'Tuần 30',
        tuan31: 'Tuần 31',
        tuan32: 'Tuần 32',
        tuan33: 'Tuần 33',
        tuan34: 'Tuần 34',
        tuan35: 'Tuần 35',
        tuan36: 'Tuần 36',
        tuan37: 'Tuần 37',
        tuan38: 'Tuần 38',
        tuan39: 'Tuần 39',
        tuan40: 'Tuần 40',
        tuan41: 'Tuần 41',
        tuan42: 'Tuần 42',
        tuan43: 'Tuần 43',
        tuan44: 'Tuần 44',
        tuan45: 'Tuần 45',
        tuan46: 'Tuần 46',
        tuan47: 'Tuần 47',
        tuan48: 'Tuần 48',
        tuan49: 'Tuần 49',
        tuan50: 'Tuần 50',
        tuan51: 'Tuần 51',
        tuan52: 'Tuần 52',
        tuan53: 'Tuần 53',
        tuan54: 'Tuần 54',
        tuan55: 'Tuần 55',
        tuan56: 'Tuần 56',
        tuan57: 'Tuần 57',
        tuan58: 'Tuần 58',
        tuan59: 'Tuần 59',
        tuan60: 'Tuần 60',

        id: 'Id',
        'customerProfile': 'Hồ sơ',
        'customerNames': 'Tên',
        'customerEmail': 'Email',
        'customerUserId': 'Người dùng',
        'customerPhoneNumber': 'Số điện thoại',
        'customerLocation': 'Địa chỉ',
        'customerDiscountRange': 'Discount',
        'customerDiscount': 'Discount',
        'customerStatus': 'Status',
        'customerCodeRange': 'Customer Code',
        'customerCode': 'Customer Code',
        'customerAccountBalanceRange': 'Account Balance',
        'customerAccountBalance': 'Balance',
        'customerCustomField': 'Custom Field',
        'customerDocs': 'Customer Docs',
        'customerLoyaltyPointsRange': 'Loyalty Points',
        'customerLoyaltyPoints': 'Loyalty Points',
        'customerCreditBalanceRange': 'Account Credit Balance',
        'customerCreditBalance': 'Credit',
        createdAt: 'Tạo vào lúc',
        updatedAt: 'Cập nhật vào lúc',
        createdAtRange: 'Tạo vào lúc',
      },
      enumerators: {
        'customerStatus': {
          'active': 'Active',
          'blocked': 'Blocked',
          'suspended': 'Suspended',
        },
      },
      new: {
        title: 'New Customer',
      },
      view: {
        title: 'View Customer',
      },
      importer: {
        title: 'Import TP Kinh doanh',
        fileName: 'tpKinhDoanh_import_template',
        hint:
          'Tải mẫu "TP KINH DOANH"',
      },
    },

    suppliers: {
      name: 'Dự án',
      label: 'Dự án',
      menu: 'Dự án',
      exporterFileName: 'duan_export',
      list: {
        menu: 'Dự án',
        title: 'Dự án',
      },
      create: {
        success: 'Dự án được thêm thành công',
      },
      update: {
        success: 'Dự án được thêm thành công',
      },
      destroy: {
        success: 'Dự án được xóa thành công',
      },
      destroyAll: {
        success: 'Dự án được xóa thành công',
      },
      edit: {
        title: 'Sửa dự án',
      },
      fields: {
        id: 'Id',
        'supplierProfile': 'Hình ảnh dự án',
        'supplierProfile1': 'Tổng quan',
        'supplierProfile2': 'Pháp lý',
        'supplierProfile3': 'Bảng giá',
        'supplierProfile4': 'CSBH dành cho NV',
        'supplierProfile5': 'CSBH dành cho KH',
        'supplierProfile6': 'Prochure',
        'supplierProfile7': 'Đơn bị dự án',

        'supplierNames': 'Tên dự án',
        'supplierBusinessName': 'Tên doanh nghiệp',
        'supplierEmail': 'Email',
        'supplierLocation': 'Địa chỉ',
        'supplierPhoneNumber': 'Số điện thoại',
        'supplierPayTerm': 'Trạng thái',
        'supplierPayType': 'Pay Type',
        'supplierStatus': 'Trạng thái',
        'supplierCreditBalanceRange': 'Credit',
        'supplierCreditBalance': 'Credit',
        'supplierDocs': 'Các tài liệu liên quan',
        'userId': 'User',
        'soTien': 'Số tiền',
        createdAt: 'Tạo vào lúc',
        updatedAt: 'Cập nhật vào lúc',
        createdAtRange: 'Tạo vào lúc',
      },
      enumerators: {
        'supplierPayTerm': {
          'daily': 'Hàng ngày',
          'monthly': 'Hàng tháng',
          'yearly': 'Hàng năm',
        },
        'supplierPayType': {
          'offline': 'Offline',
          'online': 'Online',
        },
        'supplierStatus': {
          'active': 'Đang triển khai',
          'blocked': 'Đã triển khai',
          'pending': 'Sắp triển khai',
        },
      },
      new: {
        title: 'Thêm dự án',
      },
      view: {
        title: 'Xem dự án',
      },
      importer: {
        title: 'Import Dự án',
        fileName: 'project_import_template',
        hint:
          'Files/Images các cột phải là URL của các tệp được phân tách bằng dấu cách.',
      },
    },

    staff: {
      name: 'Nhân sự',
      label: 'Nhân sự',
      menu: 'Nhân sự',
      exporterFileName: 'staff_export',
      list: {
        menu: 'Nhân sự',
        title: 'Nhân sự',
      },
      create: {
        success: 'Nhân sự được tạo thành công',
      },
      update: {
        success: 'Nhân sự được cập nhật thành công',
      },
      destroy: {
        success: 'Nhân sự được xóa thành công',
      },
      destroyAll: {
        success: 'Nhân sự được xóa thành công',
      },
      edit: {
        title: 'Sửa nhân sự',
      },
      fields: {
        maNV: 'Mã nhân viên',
        hoTenNV: 'Họ tên nhân viên',
        chucDanh: 'Chức danh',
        boPhan: 'Bộ phận',
        nhom: 'Nhóm',
        quy1: 'Qúy 1',
        quy2: 'Qúy 2',
        quy3: 'Qúy 3',
        quy4: 'Qúy 4',
        thang01: 'Tháng 1',
        thang02: 'Tháng 2',
        thang03: 'Tháng 3',
        thang04: 'Tháng 4',
        thang05: 'Tháng 5',
        thang06: 'Tháng 6',
        thang07: 'Tháng 7',
        thang08: 'Tháng 8',
        thang09: 'Tháng 9',
        thang10: 'Tháng 10',
        thang11: 'Tháng 11',
        thang12: 'Tháng 12',
        tuan01: 'Tuần 01',
        tuan02: 'Tuần 02',
        tuan03: 'Tuần 03',
        tuan04: 'Tuần 04',
        tuan05: 'Tuần 05',
        tuan06: 'Tuần 06',
        tuan07: 'Tuần 07',
        tuan08: 'Tuần 08',
        tuan09: 'Tuần 09',
        tuan10: 'Tuần 10',
        tuan11: 'Tuần 11',
        tuan12: 'Tuần 12',
        tuan13: 'Tuần 13',
        tuan14: 'Tuần 14',
        tuan15: 'Tuần 15',
        tuan16: 'Tuần 16',
        tuan17: 'Tuần 17',
        tuan18: 'Tuần 18',
        tuan19: 'Tuần 19',
        tuan20: 'Tuần 20',
        tuan21: 'Tuần 21',
        tuan22: 'Tuần 22',
        tuan23: 'Tuần 23',
        tuan24: 'Tuần 24',
        tuan25: 'Tuần 25',
        tuan26: 'Tuần 26',
        tuan27: 'Tuần 27',
        tuan28: 'Tuần 28',
        tuan29: 'Tuần 29',
        tuan30: 'Tuần 30',
        tuan31: 'Tuần 31',
        tuan32: 'Tuần 32',
        tuan33: 'Tuần 33',
        tuan34: 'Tuần 34',
        tuan35: 'Tuần 35',
        tuan36: 'Tuần 36',
        tuan37: 'Tuần 37',
        tuan38: 'Tuần 38',
        tuan39: 'Tuần 39',
        tuan40: 'Tuần 40',
        tuan41: 'Tuần 41',
        tuan42: 'Tuần 42',
        tuan43: 'Tuần 43',
        tuan44: 'Tuần 44',
        tuan45: 'Tuần 45',
        tuan46: 'Tuần 46',
        tuan47: 'Tuần 47',
        tuan48: 'Tuần 48',
        tuan49: 'Tuần 49',
        tuan50: 'Tuần 50',
        tuan51: 'Tuần 51',
        tuan52: 'Tuần 52',
        tuan53: 'Tuần 53',
        tuan54: 'Tuần 54',
        tuan55: 'Tuần 55',
        tuan56: 'Tuần 56',
        tuan57: 'Tuần 57',
        tuan58: 'Tuần 58',
        tuan59: 'Tuần 59',
        tuan60: 'Tuần 60',
        id: 'Id',
        'staffProfile': 'Ảnh',
        'staffNames': 'Tên nhân sự',
        'staffUserId': 'Tài khoản <Email>',
        'staffPhoneNumber': 'Số điện thoại',
        'staffAbout': 'Tiểu sử, lý lịch',
        'staffCustomInfo': 'Thông tin tùy chỉnh',
        'staffCv': 'CV',
        'staffDocuments': 'Tài liệu',
        'staffIsAServiceWorker': 'Nhân viên là một nhân viên phục vụ',
        'staffCommisionRange': 'Cổ phần',
        'staffCommision': 'Doanh số tuần',
        'staffDateOfBirthRange': 'Ngày sinh',
        'staffDateOfBirth': 'Ngày sinh',
        'staffMaritalStatus': 'Phòng ban',
        'staffIdentityCard': 'ID',
        'staffAccessApps': 'Cho phép truy cập vào ứng dụng di động',
        createdAt: 'Tạo vào lúc',
        updatedAt: 'Cập nhật vào lúc',
        createdAtRange: 'Tạo vào lúc',
      },
      enumerators: {
        'staffIsAServiceWorker': {
          'yes': 'Có',
          'no': 'Không',
        },
        'staffMaritalStatus': {
          'phongban1': 'Phòng ban 1',
          'phongban2': 'Phòng ban 2',
          'phongban3': 'Phòng ban 3',
          'phongban4': 'Phòng ban 4',

        },
        'staffAccessApps': {
          'Enabled': 'Kích hoạt',
          'Disabled': 'Khóa',
        },
      },
      new: {
        title: 'Thêm nhân sự',
      },
      view: {
        title: 'Nhân sự',
      },
      importer: {
        title: 'Import nhóm kinh doanh',
        fileName: 'nhomKinhDoanh_import_template',
        hint:
          'Tải mẫu "NHÓM KINH DOANH"',
      },
    },

    products: {
      name: 'products',
      label: 'Products',
      menu: 'Products',
      exporterFileName: 'products_export',
      list: {
        menu: 'Products',
        title: 'Products',
      },
      create: {
        success: 'Product saved successfully',
      },
      update: {
        success: 'Product saved successfully',
      },
      destroy: {
        success: 'Product deleted successfully',
      },
      destroyAll: {
        success: 'Product(s) deleted successfully',
      },
      edit: {
        title: 'Edit Product',
      },
      fields: {
        id: 'Id',
        'productImage': 'Hình ảnh',
        'productName': 'Name',
        'productUnit': 'Unit',
        'productBrand': 'Brand',
        'productCategory': 'Thể loại',
        'productTax': 'Tax',
        'productEnableStock': 'Enable Stock',
        'productAlertQuantityRange': 'Alert Quantity',
        'productAlertQuantity': 'Alert Quantity',
        'productSkuRange': 'Sku',
        'productSku': 'Sku',
        'productCodeType': 'Code Type',
        'productExpiryRange': 'Expiry',
        'productExpiry': 'Expiry',
        'productCustomField': 'Custom Field',
        'productDesc': 'ProductDesc',
        'productStatus': 'Status',
        'productVariation': 'Variation',
        'productAttribute': 'Attribute',
        'productColor': 'Color',
        'productStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'productEnableStock': {
          'enabled': 'Kích hoạt',
          'disabled': 'Khóa',
        },
        'productCodeType': {
          'barcode': 'Barcode',
          'qr': 'Qr',
          'other': 'Other',
        },
        'productStatus': {
          'public': 'Public',
          'private': 'Private',
        },
      },
      new: {
        title: 'New Product',
      },
      view: {
        title: 'View Product',
      },
      importer: {
        title: 'Import Products',
        fileName: 'products_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    brands: {
      upload: 'Thêm mới',
      name: 'Sơ đồ tổ chức',
      label: 'Sơ đồ tổ chức',
      menu: 'Sơ đồ tổ chức',
      exporterFileName: 'brands_export',
      list: {
        menu: 'Sơ đồ tổ chức',
        title: 'Sơ đồ tổ chức',
      },
      create: {
        success: 'Upload thành công',
      },
      update: {
        success: 'Upload thành công',
      },
      destroy: {
        success: 'Sơ đồ tổ chức xóa thành công',
      },
      destroyAll: {
        success: 'Sơ đồ tổ chức xóa thành công',
      },
      edit: {
        title: 'Upload sơ đồ tổ chức',
      },
      fields: {
        id: 'Id',
        'brandCover': 'Hình ảnh',
        'brandTitle': 'Tên sơ đồ tổ chức',
        'brandDetails': 'Chi tiết',
        createdAt: 'Tạo vào lúc',
        updatedAt: 'Cập nhật vào lúc',
        createdAtRange: 'Tạo vào lúc',
      },
      enumerators: {

      },
      new: {
        title: 'Thêm sơ đồ tổ chức',
      },
      view: {
        title: 'Sơ đồ tổ chức',
      },
      importer: {
        title: 'Import sơ đồ tổ chức',
        fileName: 'brands_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    categories: {
      name: 'Chính sách công ty',
      label: 'Chính sách công ty',
      menu: 'Chính sách công ty',
      exporterFileName: 'categories_export',
      list: {
        menu: 'Chính sách công ty',
        title: 'Chính sách công ty',
      },
      create: {
        success: 'Chính sách được lưu thành công',
      },
      update: {
        success: 'Chính sách được lưu thành công',
      },
      destroy: {
        success: 'Xóa chính sách công ty thành công',
      },
      destroyAll: {
        success: 'Xóa chính sách công ty thành công',
      },
      edit: {
        title: 'Sửa chính sách công ty',
      },
      fields: {
        id: 'Id',
        'categoryCover': 'Ảnh',
        'categoryTitle': 'Tên chính sách',
        'policyImg': 'Ảnh',
        'policyName': 'Tên chính sách',
        'categoryShortCode': 'Short Code',
        'categoryDetails': 'Chi tiết',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'Thêm chính sách công ty',
      },
      view: {
        title: 'Xem chính sách công ty',
      },
      importer: {
        title: 'Import chính sách công ty',
        fileName: 'categories_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    expenses: {
      name: 'expenses',
      label: 'Expenses',
      menu: 'Expenses',
      exporterFileName: 'expenses_export',
      list: {
        menu: 'Expenses',
        title: 'Expenses',
      },
      create: {
        success: 'Expense saved successfully',
      },
      update: {
        success: 'Expense saved successfully',
      },
      destroy: {
        success: 'Expense deleted successfully',
      },
      destroyAll: {
        success: 'Expense(s) deleted successfully',
      },
      edit: {
        title: 'Edit Expense',
      },
      fields: {
        id: 'Id',
        'expenseCover': 'Cover',
        'expensesTitle': 'Title',
        'expensesCostRange': 'Cost',
        'expensesCost': 'Cost',
        'expenseMadeTo': 'Made To',
        'expensesMadeBy': 'Made By',
        'expensesDateRange': 'Date',
        'expensesDate': 'Date',
        'expensesStatus': 'Status',
        'expenseStall': 'Stall',
        'expenseNote': 'Note',
        'expenseDocs': 'Docs',
        'expenseDoc': 'Doc',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'expensesStatus': {
          'completed': 'Completed',
          'pending': 'Pending',
        },
      },
      new: {
        title: 'New Expense',
      },
      view: {
        title: 'View Expense',
      },
      importer: {
        title: 'Import Expenses',
        fileName: 'expenses_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    expenseCategory: {
      name: 'expenseCategory',
      label: 'Expense Categories',
      menu: 'Expense Categories',
      exporterFileName: 'expenseCategory_export',
      list: {
        menu: 'Expense Categories',
        title: 'Expense Categories',
      },
      create: {
        success: 'Expense Danh mục đã được lưu thành công',
      },
      update: {
        success: 'Expense Danh mục đã được lưu thành công',
      },
      destroy: {
        success: 'Expense Category deleted successfully',
      },
      destroyAll: {
        success: 'Expense Category(s) deleted successfully',
      },
      edit: {
        title: 'Edit Expense Category',
      },
      fields: {
        id: 'Id',
        'expCategoryTitle': 'Title',
        'expCategoryDetails': 'Details',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Expense Category',
      },
      view: {
        title: 'View Expense Category',
      },
      importer: {
        title: 'Import Expense Categories',
        fileName: 'expenseCategory_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    assets: {
      name: 'assets',
      label: 'Assets',
      menu: 'Assets',
      exporterFileName: 'assets_export',
      list: {
        menu: 'Assets',
        title: 'Assets',
      },
      create: {
        success: 'Asset saved successfully',
      },
      update: {
        success: 'Asset saved successfully',
      },
      destroy: {
        success: 'Asset deleted successfully',
      },
      destroyAll: {
        success: 'Asset(s) deleted successfully',
      },
      edit: {
        title: 'Edit Asset',
      },
      fields: {
        id: 'Id',
        'assetImage': 'Image',
        'assetName': 'Name',
        'assetDetails': 'Details',
        'assetValueRange': 'Cost Value',
        'assetValue': 'Cost Value',
        'assetDocs': 'Docs',
        'assetsStall': 'Stall',
        'assetPurchaseDateRange': 'Date',
        'assetPurchaseDate': 'Date',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Asset',
      },
      view: {
        title: 'View Asset',
      },
      importer: {
        title: 'Import Assets',
        fileName: 'assets_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    devices: {
      name: 'devices',
      label: 'Devices',
      menu: 'Devices',
      exporterFileName: 'devices_export',
      list: {
        menu: 'Devices',
        title: 'Devices',
      },
      create: {
        success: 'Device saved successfully',
      },
      update: {
        success: 'Device saved successfully',
      },
      destroy: {
        success: 'Device deleted successfully',
      },
      destroyAll: {
        success: 'Device(s) deleted successfully',
      },
      edit: {
        title: 'Edit Device',
      },
      fields: {
        id: 'Id',
        'deviceImage': 'Image',
        'deviceName': 'Name',
        'deviceSerial': 'Serial',
        'deviceType': 'Device Type',
        'deviceCurrency': 'Currency',
        'deviceNote': 'Note',
        'deviceDocs': 'Docs',
        'deviceStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'deviceType': {
          'android': 'Android',
          'ios': 'Ios',
          'windows': 'Windows',
          'mac': 'Mac',
          'linux': 'Linux',
        },
      },
      new: {
        title: 'New Device',
      },
      view: {
        title: 'View Device',
      },
      importer: {
        title: 'Import Devices',
        fileName: 'devices_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    notice: {
      name: 'notice',
      label: 'Notices',
      menu: 'Notices',
      exporterFileName: 'notice_export',
      list: {
        menu: 'Notices',
        title: 'Notices',
      },
      create: {
        success: 'Notice saved successfully',
      },
      update: {
        success: 'Notice saved successfully',
      },
      destroy: {
        success: 'Notice deleted successfully',
      },
      destroyAll: {
        success: 'Notice(s) deleted successfully',
      },
      edit: {
        title: 'Edit Notice',
      },
      fields: {
        id: 'Id',
        'noticeCover': 'Cover',
        'noticeTitle': 'Title',
        'noticeDetails': 'Details',
        'noticeType': 'Notice Type',
        'userIds': 'Người dùng',
        'noticeDevice': 'Devices',
        'noticeStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'noticeType': {
          'alert': 'Alert',
          'message': 'Message',
          'notification': 'Notification',
        },
      },
      new: {
        title: 'New Notice',
      },
      view: {
        title: 'View Notice',
      },
      importer: {
        title: 'Import Notices',
        fileName: 'notice_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    sales: {
      name: 'sales',
      label: 'Sales',
      menu: 'Sales',
      exporterFileName: 'sales_export',
      list: {
        menu: 'Sales',
        title: 'Sales',
      },
      create: {
        success: 'Sale saved successfully',
      },
      update: {
        success: 'Sale saved successfully',
      },
      destroy: {
        success: 'Sale deleted successfully',
      },
      destroyAll: {
        success: 'Sale(s) deleted successfully',
      },
      edit: {
        title: 'Edit Sale',
      },
      fields: {
        id: 'Id',
        'salesInvoiceNoRange': 'Invoice No',
        'salesInvoiceNo': 'Invoice No',
        'salesCustomer': 'Customer',
        'salesPaymentStatus': 'Payment Status',
        'salesTotalAmountRange': 'Total Amount',
        'salesTotalAmount': 'Total Amount',
        'salesSubTotalAmountRange': 'Sub Total Amount',
        'salesSubTotalAmount': 'Sub Total Amount',
        'salesTotalTaxRange': 'Total Tax',
        'salesTotalTax': 'Total Tax',
        'salesProducts': 'Products',
        'salesTotalIUnitsRange': 'Units',
        'salesTotalIUnits': 'Units',
        'saleNote': 'Note',
        'salesDiscountRange': 'Discount',
        'salesDiscount': 'Discount',
        'salesPayload': 'Payload',
        'saleReturnsProducts': 'Returns Products',
        'saleReturnsUnits': 'Returns Units',
        'salesReturnReason': 'Return Reason',
        'salePaymentDetails': 'Payment Details',
        'salePaymentType': 'Payment Type',
        'saleCreditBalanceRange': 'Credit Balance',
        'saleCreditBalance': 'Credit Balance',
        'saleDevice': 'Device',
        'giftCard': 'Gift Card',
        'salesCoupon': 'Coupon',
        'salesStall': 'Stall',
        'salesRegister': 'Register',
        'salesProductsCount': 'Products Count',
        'salesProductsValue': 'Products Values',
        'salesPaymentMethod': 'Payment Method',
        'salesItemLoad': 'Item Load',
        'salesReceipt': 'Receipt',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'salesPaymentStatus': {
          'credit': 'Credit',
          'paid': 'Paid',
        },
      },
      new: {
        title: 'New Sale',
      },
      view: {
        title: 'View Sale',
      },
      importer: {
        title: 'Import Sales',
        fileName: 'sales_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    purchases: {
      name: 'purchases',
      label: 'Purchases',
      menu: 'Purchases',
      exporterFileName: 'purchases_export',
      list: {
        menu: 'Purchases',
        title: 'Purchases',
      },
      create: {
        success: 'Purchase saved successfully',
      },
      update: {
        success: 'Purchase saved successfully',
      },
      destroy: {
        success: 'Purchase deleted successfully',
      },
      destroyAll: {
        success: 'Purchase(s) deleted successfully',
      },
      edit: {
        title: 'Edit Purchase',
      },
      fields: {
        id: 'Id',
        'purchasesRef': 'Ref',
        'purchaseProduct': 'Product',
        'purchaseSupplier': 'Supplier',
        'purchasePaymentStatus': 'Payment Status',
        'purchaseUnitsRange': 'Units',
        'purchaseUnits': 'Units',
        'purchaseTotalAmountRange': 'Total Amount',
        'purchaseTotalAmount': 'Total Amount',
        'purchaseReturnsUnitsRange': 'Returns Units',
        'purchaseReturnsUnits': 'Returns Units',
        'purchaseNote': 'Purchase Note',
        'purchaseStall': 'Stall',
        'purchaseReturnsReason': 'Return Reason',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'purchasePaymentStatus': {
          'paid': 'Paid',
          'pending': 'Pending',
        },
      },
      new: {
        title: 'New Purchase',
      },
      view: {
        title: 'View Purchase',
      },
      importer: {
        title: 'Import Purchases',
        fileName: 'purchases_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    returns: {
      name: 'returns',
      label: 'Returns',
      menu: 'Returns',
      exporterFileName: 'returns_export',
      list: {
        menu: 'Returns',
        title: 'Returns',
      },
      create: {
        success: 'Return saved successfully',
      },
      update: {
        success: 'Return saved successfully',
      },
      destroy: {
        success: 'Return deleted successfully',
      },
      destroyAll: {
        success: 'Return(s) deleted successfully',
      },
      edit: {
        title: 'Edit Return',
      },
      fields: {
        id: 'Id',
        'returnRefNo': 'Ref No',
        'returnProduct': 'Product',
        'returnUnitsRange': 'Units',
        'returnUnits': 'Units',
        'returnReason': 'Reason',
        'returnsFrom': 'From',
        'returnIdentifier': 'Identifier',
        'returnStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'returnsFrom': {
          'purchase': 'Purchase',
          'sale': 'Sale',
        },
      },
      new: {
        title: 'New Return',
      },
      view: {
        title: 'View Return',
      },
      importer: {
        title: 'Import Returns',
        fileName: 'returns_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    stockAdjustments: {
      name: 'stockAdjustments',
      label: 'Stock Adjustments',
      menu: 'Stock Adjustments',
      exporterFileName: 'stockAdjustments_export',
      list: {
        menu: 'Stock Adjustments',
        title: 'Stock Adjustments',
      },
      create: {
        success: 'Stock Adjustment saved successfully',
      },
      update: {
        success: 'Stock Adjustment saved successfully',
      },
      destroy: {
        success: 'Stock Adjustment deleted successfully',
      },
      destroyAll: {
        success: 'Stock Adjustment(s) deleted successfully',
      },
      edit: {
        title: 'Edit Stock Adjustment',
      },
      fields: {
        id: 'Id',
        'stockAdjustmentRef': 'Ref',
        'stockAdjustmentProduct': 'Product',
        'stockAdjustmentType': 'Type',
        'stockAdjustmentUnitsRange': 'Units',
        'stockAdjustmentUnits': 'Units',
        'adjustmentStall': 'Stall',
        'stockAdjustmentsReason': 'Reason',
        'stockAdjustmentClass': 'Class',
        'stockAdjustmentLossRange': 'Loss',
        'stockAdjustmentLoss': 'Loss',
        'stockAdjustmentRecorverdAmountRange': 'Recovered',
        'stockAdjustmentRecorverdAmount': 'Recovered',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'stockAdjustmentType': {
          'increase': 'Increase',
          'decrease': 'Decrease',
        },
        'stockAdjustmentClass': {
          'Normal': 'Normal',
          'Abnomal': 'Abnomal',
        },
      },
      new: {
        title: 'New Stock Adjustment',
      },
      view: {
        title: 'View Stock Adjustment',
      },
      importer: {
        title: 'Import Stock Adjustments',
        fileName: 'stockAdjustments_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    units: {
      name: 'Phòng ban',
      label: 'Phòng ban',
      menu: 'Phòng ban',
      exporterFileName: 'units_export',
      list: {
        menu: 'Phòng ban',
        title: 'Phòng ban',
      },
      create: {
        success: 'Unit saved successfully',
      },
      update: {
        success: 'Unit saved successfully',
      },
      destroy: {
        success: 'Unit deleted successfully',
      },
      destroyAll: {
        success: 'Unit(s) deleted successfully',
      },
      edit: {
        title: 'Edit Unit',
      },
      fields: {
        id: 'Id',
        'unitsTitle': 'Title',
        'unitsCode': 'Code',
        'unitsType': 'UnitsType',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'unitsType': {
          'decimal': 'Decimal',
          'integer': 'Integer',
          'none': 'None',
        },
      },
      new: {
        title: 'Thêm phòng ban',
      },
      view: {
        title: 'View Unit',
      },
      importer: {
        title: 'Tên phòng ban',
        fileName: 'units_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    giftCard: {
      name: 'giftCard',
      label: 'Gift Cards',
      menu: 'Gift Cards',
      exporterFileName: 'giftCard_export',
      list: {
        menu: 'Gift Cards',
        title: 'Gift Cards',
      },
      create: {
        success: 'Gift Card saved successfully',
      },
      update: {
        success: 'Gift Card saved successfully',
      },
      destroy: {
        success: 'Gift Card deleted successfully',
      },
      destroyAll: {
        success: 'Gift Card(s) deleted successfully',
      },
      edit: {
        title: 'Edit Gift Card',
      },
      fields: {
        id: 'Id',
        'giftCardName': 'Name',
        'giftCardNoRange': 'Card No',
        'giftCardNo': 'Card No',
        'giftCardAmmountRange': 'Ammount',
        'giftCardAmmount': 'Ammount',
        'giftCardCustomer': 'Customer',
        'giftCardStartDateRange': 'Start Date',
        'giftCardStartDate': 'Start Date',
        'giftCardEndDateRange': 'End Date',
        'giftCardEndDate': 'End Date',
        'giftCardStall': 'Stalls',
        'giftCardStatus': 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'giftCardStatus': {
          'Pending': 'Pending',
          'Used': 'Used',
        },
      },
      new: {
        title: 'New Gift Card',
      },
      view: {
        title: 'View Gift Card',
      },
      importer: {
        title: 'Import Gift Cards',
        fileName: 'giftCard_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    coupon: {
      name: 'coupon',
      label: 'Coupons',
      menu: 'Coupons',
      exporterFileName: 'coupon_export',
      list: {
        menu: 'Coupons',
        title: 'Coupons',
      },
      create: {
        success: 'Coupon saved successfully',
      },
      update: {
        success: 'Coupon saved successfully',
      },
      destroy: {
        success: 'Coupon deleted successfully',
      },
      destroyAll: {
        success: 'Coupon(s) deleted successfully',
      },
      edit: {
        title: 'Edit Coupon',
      },
      fields: {
        id: 'Id',
        'couponCode': 'Coupon Code',
        'couponType': 'Type',
        'couponValueRange': 'Value',
        'couponValue': 'Value',
        'couponMinAmountRange': 'Min Amount',
        'couponMinAmount': 'Min Amount',
        'couponStartDateRange': 'Start Date',
        'couponStartDate': 'Start Date',
        'couponEndDateRange': 'End Date',
        'couponEndDate': 'End Date',
        'couponStall': 'Stall',
        'couponStatus': 'Status',
        'couponMaxUseRange': 'Max Use',
        'couponMaxUse': 'Max Use',
        'couponUsageCountRange': 'Count',
        'couponUsageCount': 'Count',
        'couponSalesUsed': 'Sales',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'couponType': {
          'Percentage': 'Percentage',
          'Fixed': 'Fixed',
        },
        'couponStatus': {
          'Active': 'Active',
          'Inactive': 'Inactive',
        },
      },
      new: {
        title: 'New Coupon',
      },
      view: {
        title: 'View Coupon',
      },
      importer: {
        title: 'Import Coupons',
        fileName: 'coupon_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    damages: {
      name: 'damages',
      label: 'Damages',
      menu: 'Damages',
      exporterFileName: 'damages_export',
      list: {
        menu: 'Damages',
        title: 'Damages',
      },
      create: {
        success: 'Damage saved successfully',
      },
      update: {
        success: 'Damage saved successfully',
      },
      destroy: {
        success: 'Damage deleted successfully',
      },
      destroyAll: {
        success: 'Damage(s) deleted successfully',
      },
      edit: {
        title: 'Edit Damage',
      },
      fields: {
        id: 'Id',
        'damageCover': 'Cover',
        'damageRef': 'Ref',
        'damageProduct': 'Product',
        'damageDateRange': 'Date',
        'damageDate': 'Date',
        'damageCausedBy': 'Caused By',
        'damageAmmountRange': 'Cost',
        'damageAmmount': 'Cost',
        'damageNote': 'Note',
        'damageDocs': 'Docs',
        'damageStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Damage',
      },
      view: {
        title: 'View Damage',
      },
      importer: {
        title: 'Import Damages',
        fileName: 'damages_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    leave: {
      name: 'leave',
      label: 'Leaves',
      menu: 'Leaves',
      exporterFileName: 'leave_export',
      list: {
        menu: 'Leaves',
        title: 'Leaves',
      },
      create: {
        success: 'Leave saved successfully',
      },
      update: {
        success: 'Leave saved successfully',
      },
      destroy: {
        success: 'Leave deleted successfully',
      },
      destroyAll: {
        success: 'Leave(s) deleted successfully',
      },
      edit: {
        title: 'Edit Leave',
      },
      fields: {
        id: 'Id',
        'leaveRef': 'Ref',
        'leaveUserId': 'User',
        'leaveType': 'Type',
        'leaveStartDateRange': 'Ngày bắt đầu',
        'leaveStartDate': 'Ngày bắt đầu',
        'leaveEndDateRange': 'Ngày kết thúc',
        'leaveEndDate': 'Ngày kết thúc',
        'leaveNote': 'Note',
        'leaveDocs': 'Docs',
        'leaveAssignedStaff': 'Assigned Staff',
        createdAt: 'Tạo vào lúc',
        updatedAt: 'Cập nhật vào lúc',
        createdAtRange: 'Tạo vào lúc',
      },
      enumerators: {

      },
      new: {
        title: 'Tạo danh sách nghỉ phép',
      },
      view: {
        title: 'View Leave',
      },
      importer: {
        title: 'Import Leaves',
        fileName: 'leave_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    leaveType: {
      name: 'leaveType',
      label: 'Loại nghỉ phép',
      menu: 'Loại nghỉ phép',
      exporterFileName: 'leaveType_export',
      list: {
        menu: 'Loại nghỉ phép',
        title: 'Loại nghỉ phép',
      },
      create: {
        success: 'Loại nghỉ phép đã được lưu thành công',
      },
      update: {
        success: 'Loại nghỉ phép đã được lưu thành công',
      },
      destroy: {
        success: 'Loại nghỉ phép đã được xóa thành công',
      },
      destroyAll: {
        success: 'Loại nghỉ phép đã được xóa thành công',
      },
      edit: {
        title: 'Chỉnh sửa loại nghỉ phép',
      },
      fields: {
        id: 'Id',
        'leaveTypeTitle': 'Tiêu đề',
        'leaveTypeDetails': 'Chi tiết',
        'leaveCategory': 'Thể loại',
        createdAt: 'Tạo vào lúc',
        updatedAt: 'Cập nhật vào lúc',
        createdAtRange: 'Tạo vào lúc',
      },
      enumerators: {
        'leaveCategory': {
          'monthly': 'Hàng tháng',
          'yearly': 'Hàng năm',
          'None': 'None',
          'Sick': 'Đau ốm',
          'Study': 'Học',
          'Special': 'Đặc biệt',
          'Maternity': 'Thai sản',
          'Paternity': 'Quan hệ cha con',
          'Unauthorised': 'Không được phép',
        },
      },
      new: {
        title: 'Tạo loại nghỉ phép mới',
      },
      view: {
        title: 'View Leave Type',
      },
      importer: {
        title: 'Import Leave Types',
        fileName: 'leaveType_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    allowanceAndDeduction: {
      name: 'allowanceAndDeduction',
      label: 'Allowances And Deductions',
      menu: 'Allowances And Deductions',
      exporterFileName: 'allowanceAndDeduction_export',
      list: {
        menu: 'Allowances And Deductions',
        title: 'Allowances And Deductions',
      },
      create: {
        success: 'Allowance And Deduction saved successfully',
      },
      update: {
        success: 'Allowance And Deduction saved successfully',
      },
      destroy: {
        success: 'Allowance And Deduction deleted successfully',
      },
      destroyAll: {
        success: 'Allowance And Deduction(s) deleted successfully',
      },
      edit: {
        title: 'Edit Allowance And Deduction',
      },
      fields: {
        id: 'Id',
        'adRef': 'Ref',
        'adType': 'Type',
        'adStaff': 'Staff',
        'adAmmountRange': 'Ammount',
        'adAmmount': 'Ammount',
        'adStall': 'Stall',
        'adDateRange': 'Date',
        'adDate': 'Date',
        'adNote': 'Note',
        'adDamages': 'Damages',
        'adCommissions': 'Cổ phần',
        'adExpenses': 'Expenses',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'adType': {
          'Allowance': 'Allowance',
          'Deduction': 'Deduction',
        },
      },
      new: {
        title: 'New Allowance And Deduction',
      },
      view: {
        title: 'View Allowance And Deduction',
      },
      importer: {
        title: 'Import Allowances And Deductions',
        fileName: 'allowanceAndDeduction_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    payroll: {
      name: 'payroll',
      label: 'Payrolls',
      menu: 'Payrolls',
      exporterFileName: 'payroll_export',
      list: {
        menu: 'Payrolls',
        title: 'Payrolls',
      },
      create: {
        success: 'Payroll saved successfully',
      },
      update: {
        success: 'Payroll saved successfully',
      },
      destroy: {
        success: 'Payroll deleted successfully',
      },
      destroyAll: {
        success: 'Payroll(s) deleted successfully',
      },
      edit: {
        title: 'Edit Payroll',
      },
      fields: {
        id: 'Id',
        'payrollRef': 'Ref',
        'payrollStaff': 'Staff',
        'payrollSalaryRange': 'Salary',
        'payrollSalary': 'Salary',
        'payrollAd': 'Allowance and Deductions',
        'payrollDocs': 'Docs',
        'payrollWorkingType': 'Type',
        'payrollWorkingTimeRange': 'Time',
        'payrollWorkingTime': 'Time',
        'payrollStatus': 'Status',
        'payrollDateRange': 'Date',
        'payrollDate': 'Date',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'payrollWorkingType': {
          'Days': 'Days',
          'Hours': 'Hours',
          'Weeks': 'Weeks',
          'Months': 'Months',
        },
        'payrollStatus': {
          'Pending': 'Pending',
          'Completed': 'Completed',
        },
      },
      new: {
        title: 'New Payroll',
      },
      view: {
        title: 'View Payroll',
      },
      importer: {
        title: 'Import Payrolls',
        fileName: 'payroll_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    attendance: {
      name: 'attendance',
      label: 'Attendances',
      menu: 'Attendances',
      exporterFileName: 'attendance_export',
      list: {
        menu: 'Attendances',
        title: 'Attendances',
      },
      create: {
        success: 'Attendance saved successfully',
      },
      update: {
        success: 'Attendance saved successfully',
      },
      destroy: {
        success: 'Attendance deleted successfully',
      },
      destroyAll: {
        success: 'Attendance(s) deleted successfully',
      },
      edit: {
        title: 'Edit Attendance',
      },
      fields: {
        id: 'Id',
        'attendanceRef': 'Ref',
        'attendanceStaff': 'Staff',
        'attendanceClockInRange': 'Clock In',
        'attendanceClockIn': 'Clock In',
        'attendanceClockOutRange': 'Clock Out',
        'attendanceClockOut': 'Clock Out',
        'attendanceNote': 'Note',
        'expenseStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Attendance',
      },
      view: {
        title: 'View Attendance',
      },
      importer: {
        title: 'Import Attendances',
        fileName: 'attendance_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    taxClass: {
      name: 'taxClass',
      label: 'Tax Classes',
      menu: 'Tax Classes',
      exporterFileName: 'taxClass_export',
      list: {
        menu: 'Tax Classes',
        title: 'Tax Classes',
      },
      create: {
        success: 'Tax Class saved successfully',
      },
      update: {
        success: 'Tax Class saved successfully',
      },
      destroy: {
        success: 'Tax Class deleted successfully',
      },
      destroyAll: {
        success: 'Tax Class(s) deleted successfully',
      },
      edit: {
        title: 'Edit Tax Class',
      },
      fields: {
        id: 'Id',
        'taxClassName': 'Class Name',
        'taxClassPercentageRange': 'Class Percentage',
        'taxClassPercentage': 'Class Percentage',
        'taxClassDetails': 'Class Details',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Tax Class',
      },
      view: {
        title: 'View Tax Class',
      },
      importer: {
        title: 'Import Tax Classes',
        fileName: 'taxClass_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    todo: {
      name: 'todo',
      label: 'Todos',
      menu: 'Todos',
      exporterFileName: 'todo_export',
      list: {
        menu: 'Todos',
        title: 'Todos',
      },
      create: {
        success: 'Todo saved successfully',
      },
      update: {
        success: 'Todo saved successfully',
      },
      destroy: {
        success: 'Todo deleted successfully',
      },
      destroyAll: {
        success: 'Todo(s) deleted successfully',
      },
      edit: {
        title: 'Edit Todo',
      },
      fields: {
        id: 'Id',
        'todoTitle': 'Title',
        'todoNote': 'Note',
        'todoStaff': 'Staff',
        'todoStatus': 'Status',
        'todoStartDateRange': 'Start Date',
        'todoStartDate': 'Start Date',
        'todoEndDateRange': 'End Date',
        'todoEndDate': 'End Date',
        'todoRatingRange': 'Rating',
        'todoRating': 'Rating',
        'todoStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'todoStatus': {
          'New': 'New',
          'Progress': 'Progress',
          'Done': 'Done',
        },
      },
      new: {
        title: 'New Todo',
      },
      view: {
        title: 'View Todo',
      },
      importer: {
        title: 'Import Todos',
        fileName: 'todo_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    documents: {
      name: 'documents',
      label: 'Documents',
      menu: 'Documents',
      exporterFileName: 'documents_export',
      list: {
        menu: 'Documents',
        title: 'Documents',
      },
      create: {
        success: 'Document saved successfully',
      },
      update: {
        success: 'Document saved successfully',
      },
      destroy: {
        success: 'Document deleted successfully',
      },
      destroyAll: {
        success: 'Document(s) deleted successfully',
      },
      edit: {
        title: 'Edit Document',
      },
      fields: {
        id: 'Id',
        'documentTitle': 'Title',
        'documentDetails': 'Details',
        'documentType': 'Type',
        'docStall': 'Stall',
        'documentFile': 'File',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Document',
      },
      view: {
        title: 'View Document',
      },
      importer: {
        title: 'Import Documents',
        fileName: 'documents_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    paymentMethods: {
      name: 'paymentMethods',
      label: 'Payment Methods',
      menu: 'Payment Methods',
      exporterFileName: 'paymentMethods_export',
      list: {
        menu: 'Payment Methods',
        title: 'Payment Methods',
      },
      create: {
        success: 'Payment Method saved successfully',
      },
      update: {
        success: 'Payment Method saved successfully',
      },
      destroy: {
        success: 'Payment Method deleted successfully',
      },
      destroyAll: {
        success: 'Payment Method(s) deleted successfully',
      },
      edit: {
        title: 'Edit Payment Method',
      },
      fields: {
        id: 'Id',
        'paymentMethodLogo': 'Logo',
        'paymentMethodTitle': 'Title',
        'paymentMethodType': 'Type',
        'paymentMethodParams': 'Params',
        'paymentMethodResponse': 'Response',
        'paymentMethodStatus': 'Status',
        'paymentMethodHeader': 'Header',
        'paymentMethodApi': 'Api',
        'paymentMethodCustom1': 'Custom1',
        'paymentMethodCustom2': 'Custom2',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'paymentMethodType': {
          'Online': 'Online',
          'Offline': 'Offline',
        },
      },
      new: {
        title: 'New Payment Method',
      },
      view: {
        title: 'View Payment Method',
      },
      importer: {
        title: 'Import Payment Methods',
        fileName: 'paymentMethods_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    documentTypes: {
      name: 'documentTypes',
      label: 'Document Types',
      menu: 'Document Types',
      exporterFileName: 'documentTypes_export',
      list: {
        menu: 'Document Types',
        title: 'Document Types',
      },
      create: {
        success: 'Document Type saved successfully',
      },
      update: {
        success: 'Document Type saved successfully',
      },
      destroy: {
        success: 'Document Type deleted successfully',
      },
      destroyAll: {
        success: 'Document Type(s) deleted successfully',
      },
      edit: {
        title: 'Edit Document Type',
      },
      fields: {
        id: 'Id',
        'documentTypeTitle': 'Title',
        'documentTypeNote': 'Note',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Document Type',
      },
      view: {
        title: 'View Document Type',
      },
      importer: {
        title: 'Import Document Types',
        fileName: 'documentTypes_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    memos: {
      name: 'memos',
      label: 'Memos',
      menu: 'Memos',
      exporterFileName: 'memos_export',
      list: {
        menu: 'Memos',
        title: 'Memos',
      },
      create: {
        success: 'Memo saved successfully',
      },
      update: {
        success: 'Memo saved successfully',
      },
      destroy: {
        success: 'Memo deleted successfully',
      },
      destroyAll: {
        success: 'Memo(s) deleted successfully',
      },
      edit: {
        title: 'Edit Memo',
      },
      fields: {
        id: 'Id',
        'memosCover': 'Cover',
        'memosTitle': 'Title',
        'memosDetails': 'Details',
        'memosFrom': 'From',
        'memosStartDateRange': 'Start Date',
        'memosStartDate': 'Start Date',
        'memosEndDateRange': 'End Date',
        'memosEndDate': 'End Date',
        'memosTo': 'Memo To',
        'memoStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Memo',
      },
      view: {
        title: 'View Memo',
      },
      importer: {
        title: 'Import Memos',
        fileName: 'memos_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    currency: {
      name: 'currency',
      label: 'Currencies',
      menu: 'Currencies',
      exporterFileName: 'currency_export',
      list: {
        menu: 'Currencies',
        title: 'Currencies',
      },
      create: {
        success: 'Currency saved successfully',
      },
      update: {
        success: 'Currency saved successfully',
      },
      destroy: {
        success: 'Currency deleted successfully',
      },
      destroyAll: {
        success: 'Currency(s) deleted successfully',
      },
      edit: {
        title: 'Edit Currency',
      },
      fields: {
        id: 'Id',
        'currencyTitle': 'CurrencyTitle',
        'currencyCode': 'Code',
        'currencySign': 'Sign',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Currency',
      },
      view: {
        title: 'View Currency',
      },
      importer: {
        title: 'Import Currencies',
        fileName: 'currency_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    holiday: {
      name: 'holiday',
      label: 'Holidays',
      menu: 'Holidays',
      exporterFileName: 'holiday_export',
      list: {
        menu: 'Holidays',
        title: 'Holidays',
      },
      create: {
        success: 'Holiday saved successfully',
      },
      update: {
        success: 'Holiday saved successfully',
      },
      destroy: {
        success: 'Holiday deleted successfully',
      },
      destroyAll: {
        success: 'Holiday(s) deleted successfully',
      },
      edit: {
        title: 'Edit Holiday',
      },
      fields: {
        id: 'Id',
        'holidayCover': 'Cover',
        'holidayTitle': 'Title',
        'holidayDetails': 'Details',
        'holidayStartDateRange': 'Start Date',
        'holidayStartDate': 'Start Date',
        'holidayEndDateRange': 'End Date',
        'holidayEndDate': 'End Date',
        'holidayStall': 'Stall',
        'holidayStaff': 'Staff',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Holiday',
      },
      view: {
        title: 'View Holiday',
      },
      importer: {
        title: 'Import Holidays',
        fileName: 'holiday_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    stall: {
      name: 'stall',
      label: 'Stalls',
      menu: 'Stalls',
      exporterFileName: 'stall_export',
      list: {
        menu: 'Stalls',
        title: 'Stalls',
      },
      create: {
        success: 'Stall saved successfully',
      },
      update: {
        success: 'Stall saved successfully',
      },
      destroy: {
        success: 'Stall deleted successfully',
      },
      destroyAll: {
        success: 'Stall(s) deleted successfully',
      },
      edit: {
        title: 'Edit Stall',
      },
      fields: {
        id: 'Id',
        'stallCover': 'Cover',
        'stallName': 'Name',
        'stallType': 'Type',
        'stallInfo': 'Info',
        'stallLocation': 'Location',
        'stallPhoneNumber': 'Phone Number',
        'stallEmail': 'Email',
        'stallIsStatus': 'Status',
        'stallPos': 'Pos',
        'stallLoyaltyPointValueRange': 'Loyalty Point Value',
        'stallLoyaltyPointValue': 'Loyalty Point Value',
        'stallCustom1': 'Custom 1',
        'stallCustom2': 'Custom 2',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'stallType': {
          'warehouse': 'Warehouse',
          'outlet': 'Outlet',
          'store': 'Store',
          'counter': 'Counter',
        },
        'stallIsStatus': {
          'public': 'Public',
          'private': 'Private',
        },
        'stallPos': {
          'enabled': 'Đã bật',
          'disabled': 'Khóa',
        },
      },
      new: {
        title: 'New Stall',
      },
      view: {
        title: 'View Stall',
      },
      importer: {
        title: 'Import Stalls',
        fileName: 'stall_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    variation: {
      name: 'variation',
      label: 'Variations',
      menu: 'Variations',
      exporterFileName: 'variation_export',
      list: {
        menu: 'Variations',
        title: 'Variations',
      },
      create: {
        success: 'Variation saved successfully',
      },
      update: {
        success: 'Variation saved successfully',
      },
      destroy: {
        success: 'Variation deleted successfully',
      },
      destroyAll: {
        success: 'Variation(s) deleted successfully',
      },
      edit: {
        title: 'Edit Variation',
      },
      fields: {
        id: 'Id',
        'variationName': 'Tên nhóm',
        'variationValues': 'Values',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'Thêm nhóm',
      },
      view: {
        title: 'Thêm nhóm',
      },
      importer: {
        title: 'Import Variations',
        fileName: 'variation_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    productLogs: {
      name: 'productLogs',
      label: 'Product Logs',
      menu: 'Product Logs',
      exporterFileName: 'productLogs_export',
      list: {
        menu: 'Product Logs',
        title: 'Product Logs',
      },
      create: {
        success: 'Product Log saved successfully',
      },
      update: {
        success: 'Product Log saved successfully',
      },
      destroy: {
        success: 'Product Log deleted successfully',
      },
      destroyAll: {
        success: 'Product Log(s) deleted successfully',
      },
      edit: {
        title: 'Edit Product Log',
      },
      fields: {
        id: 'Id',
        'productLogRef': 'Ref',
        'productLogProduct': 'Product',
        'productLogStall': 'Stall',
        'productLogSellingPriceRange': 'Selling Price',
        'productLogSellingPrice': 'Selling Price',
        'productLogMarginRange': 'Margin',
        'productLogMargin': 'Margin',
        'productLogBuyingPriceRange': 'Buying Price',
        'productLogBuyingPrice': 'Buying Price',
        'productLogCurrentStockRange': 'Current Stock',
        'productLogCurrentStock': 'Current Stock',
        'productLogSoldUnitsRange': 'Sold',
        'productLogSoldUnits': 'Sold',
        'productLogAdjustedUnitsRange': 'Adjusted Units',
        'productLogAdjustedUnits': 'Adjusted Units',
        'productLogDamagedUnitsRange': 'Damaged',
        'productLogDamagedUnits': 'Damaged',
        'productLogReturnedUnitsRange': 'Returned',
        'productLogReturnedUnits': 'Returned',
        'productLogPurchasedUnitsRange': 'Purchased',
        'productLogPurchasedUnits': 'Purchased',
        'productLogTransferredUnitsRange': 'Transferred Units',
        'productLogTransferredUnits': 'Transferred Units',
        'productLogPurchaseRef': 'Purchase Ref',
        'productLogSaleRef': 'Sale Ref',
        'productLogReturnsRef': 'Returns Ref',
        'productLogAdjustRef': 'Adjust',
        'productLogTransferredRef': 'Transferred Ref',
        'productLogDamageRef': 'Damage Ref',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Product Log',
      },
      view: {
        title: 'View Product Log',
      },
      importer: {
        title: 'Import Product Logs',
        fileName: 'productLogs_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    stockTransfer: {
      name: 'stockTransfer',
      label: 'StockTransfers',
      menu: 'StockTransfers',
      exporterFileName: 'stockTransfer_export',
      list: {
        menu: 'StockTransfers',
        title: 'StockTransfers',
      },
      create: {
        success: 'Stock Transfer saved successfully',
      },
      update: {
        success: 'Stock Transfer saved successfully',
      },
      destroy: {
        success: 'Stock Transfer deleted successfully',
      },
      destroyAll: {
        success: 'Stock Transfer(s) deleted successfully',
      },
      edit: {
        title: 'Edit Stock Transfer',
      },
      fields: {
        id: 'Id',
        'transferRef': 'Transfer Ref',
        'transferProduct': 'Product',
        'transferStallFrom': 'From',
        'transferStallTo': 'To',
        'transferUnitsRange': 'Units',
        'transferUnits': 'Units',
        'transferNote': 'Note',
        'transferStatus': 'Status',
        'transferExpenses': 'Expenses',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'transferStatus': {
          'Done': 'Done',
          'Pending': 'Pending',
          'Active': 'Active',
        },
      },
      new: {
        title: 'New Stock Transfer',
      },
      view: {
        title: 'View Stock Transfer',
      },
      importer: {
        title: 'Import StockTransfers',
        fileName: 'stockTransfer_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    deviceSessions: {
      name: 'deviceSessions',
      label: 'Device Sessions',
      menu: 'Device Sessions',
      exporterFileName: 'deviceSessions_export',
      list: {
        menu: 'Device Sessions',
        title: 'Device Sessions',
      },
      create: {
        success: 'Device Session saved successfully',
      },
      update: {
        success: 'Device Session saved successfully',
      },
      destroy: {
        success: 'Device Session deleted successfully',
      },
      destroyAll: {
        success: 'Device Session(s) deleted successfully',
      },
      edit: {
        title: 'Edit Device Session',
      },
      fields: {
        id: 'Id',
        'sessionDevice': 'Device',
        'sessionLoginDateRange': 'Date',
        'sessionLoginDate': 'Date',
        'sessionLogoutDateRange': 'Logout',
        'sessionLogoutDate': 'Logout',
        'sessionUser': 'User',
        'sessionDeviceType': 'Device Type',
        'sessionIp': 'Ip',
        'sessionNetwork': 'Network',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'sessionDeviceType': {
          'POS': 'POS',
          'Stock': 'Stock',
          'Customer': 'Customer',
          'HR': 'HR',
        },
      },
      new: {
        title: 'New Device Session',
      },
      view: {
        title: 'View Device Session',
      },
      importer: {
        title: 'Import Device Sessions',
        fileName: 'deviceSessions_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    productCount: {
      name: 'productCount',
      label: 'Product Counts',
      menu: 'Product Counts',
      exporterFileName: 'productCount_export',
      list: {
        menu: 'Product Counts',
        title: 'Product Counts',
      },
      create: {
        success: 'Product Count saved successfully',
      },
      update: {
        success: 'Product Count saved successfully',
      },
      destroy: {
        success: 'Product Count deleted successfully',
      },
      destroyAll: {
        success: 'Product Count(s) deleted successfully',
      },
      edit: {
        title: 'Edit Product Count',
      },
      fields: {
        id: 'Id',
        'countRange': 'Count',
        'count': 'Count',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Product Count',
      },
      view: {
        title: 'View Product Count',
      },
      importer: {
        title: 'Import Product Counts',
        fileName: 'productCount_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    productValue: {
      name: 'productValue',
      label: 'Giá trị sản phẩm',
      menu: 'Product Values',
      exporterFileName: 'productValue_export',
      list: {
        menu: 'Product Values',
        title: 'Product Values',
      },
      create: {
        success: 'Product Value saved successfully',
      },
      update: {
        success: 'Product Value saved successfully',
      },
      destroy: {
        success: 'Product Value deleted successfully',
      },
      destroyAll: {
        success: 'Product Value(s) deleted successfully',
      },
      edit: {
        title: 'Edit Product Value',
      },
      fields: {
        id: 'Id',
        'valueRange': 'Value',
        'value': 'Value',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Product Value',
      },
      view: {
        title: 'View Product Value',
      },
      importer: {
        title: 'Import Product Values',
        fileName: 'productValue_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    register: {
      name: 'register',
      label: 'Registers',
      menu: 'Registers',
      exporterFileName: 'register_export',
      list: {
        menu: 'Registers',
        title: 'Registers',
      },
      create: {
        success: 'Register saved successfully',
      },
      update: {
        success: 'Register saved successfully',
      },
      destroy: {
        success: 'Register deleted successfully',
      },
      destroyAll: {
        success: 'Register(s) deleted successfully',
      },
      edit: {
        title: 'Edit Register',
      },
      fields: {
        id: 'Id',
        'registerRef': 'Ref',
        'registerStall': 'Stall',
        'registerStaff': 'Staff',
        'registerOpeningValueRange': 'Opening Value',
        'registerOpeningValue': 'Opening Value',
        'registerClosingValueRange': 'Closing Value',
        'registerClosingValue': 'Closing Value',
        'registerSaleValueRange': 'Sale Value',
        'registerSaleValue': 'Sale Value',
        'registerSaleItemsRange': 'Sold Items',
        'registerSaleItems': 'Sold Items',
        'registerSaleRef': 'Sale Ref',
        'registerReturnsRef': 'Returns Ref',
        'registerOpenTimeRange': 'Open Time',
        'registerOpenTime': 'Open Time',
        'registerCloseTimeRange': 'Close Time',
        'registerCloseTime': 'Close Time',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Register',
      },
      view: {
        title: 'View Register',
      },
      importer: {
        title: 'Import Registers',
        fileName: 'register_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    commissions: {
      name: 'commissions',
      label: 'Commissions',
      menu: 'Commissions',
      exporterFileName: 'commissions_export',
      list: {
        menu: 'Commissions',
        title: 'Commissions',
      },
      create: {
        success: 'Commission saved successfully',
      },
      update: {
        success: 'Commission saved successfully',
      },
      destroy: {
        success: 'Commission deleted successfully',
      },
      destroyAll: {
        success: 'Commission(s) deleted successfully',
      },
      edit: {
        title: 'Edit Commission',
      },
      fields: {
        id: 'Id',
        'commStaff': 'Staff',
        'commSale': 'Sales',
        'commStall': 'Stall',
        'commRegister': 'Register',
        'commAmountRange': 'Amount',
        'commAmount': 'Amount',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Commission',
      },
      view: {
        title: 'View Commission',
      },
      importer: {
        title: 'Import Commissions',
        fileName: 'commissions_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    transactions: {
      name: 'transactions',
      label: 'Transactions',
      menu: 'Transactions',
      exporterFileName: 'transactions_export',
      list: {
        menu: 'Transactions',
        title: 'Transactions',
      },
      create: {
        success: 'Transaction saved successfully',
      },
      update: {
        success: 'Transaction saved successfully',
      },
      destroy: {
        success: 'Transaction deleted successfully',
      },
      destroyAll: {
        success: 'Transaction(s) deleted successfully',
      },
      edit: {
        title: 'Edit Transaction',
      },
      fields: {
        id: 'Id',
        'transactionRef': 'Ref',
        'transactionClass': 'Class',
        'transactionType': 'Type',
        'transactionValueRange': 'Value',
        'transactionValue': 'Value',
        'transactionIdentifier': 'Identifier',
        'transactionSession': 'Session',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'transactionClass': {
          'Purchase': 'Purchase',
          'Sales': 'Sales',
          'Customer': 'Customer',
          'Assets': 'Assets',
          'Expenses': 'Expenses',
          'Salary': 'Salary',
          'AD': 'AD',
        },
        'transactionType': {
          'Debit': 'Debit',
          'Credit': 'Credit',
        },
      },
      new: {
        title: 'New Transaction',
      },
      view: {
        title: 'View Transaction',
      },
      importer: {
        title: 'Import Transactions',
        fileName: 'transactions_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    priceChange: {
      name: 'priceChange',
      label: 'PriceChanges',
      menu: 'PriceChanges',
      exporterFileName: 'priceChange_export',
      list: {
        menu: 'PriceChanges',
        title: 'PriceChanges',
      },
      create: {
        success: 'Price Change saved successfully',
      },
      update: {
        success: 'Price Change saved successfully',
      },
      destroy: {
        success: 'Price Change deleted successfully',
      },
      destroyAll: {
        success: 'Price Change(s) deleted successfully',
      },
      edit: {
        title: 'Edit Price Change',
      },
      fields: {
        id: 'Id',
        'priceChangeRef': 'Ref',
        'priceChangeType': 'Type',
        'priceChangeBeforeRange': 'Before',
        'priceChangeBefore': 'Before',
        'priceChangeAfterRange': 'After',
        'priceChangeAfter': 'After',
        'priceChangeProduct': 'Product',
        'priceChangeStall': 'Stall',
        'priceChangeSession': 'Session',
        'priceChangeStatus': 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'priceChangeType': {
          'Buying': 'Buying',
          'Margin': 'Margin',
        },
        'priceChangeStatus': {
          'Completed': 'Completed',
          'Pending': 'Pending',
        },
      },
      new: {
        title: 'New Price Change',
      },
      view: {
        title: 'View Price Change',
      },
      importer: {
        title: 'Import PriceChanges',
        fileName: 'priceChange_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Chỉnh sửa hồ sơ',
      success: 'Hồ sơ được cập nhật thành công',
    },
    createAnAccount: 'Tạo tài khoản',
    rememberMe: 'Lưu tài khoản',
    forgotPassword: 'Quên mật khẩu',
    signin: 'Đăng nhập',
    signup: 'Đăng ký',
    signout: 'Đăng xuất',
    alreadyHaveAnAccount:
      'Quay lại trang đăng nhập',
    signinWithAnotherAccount:
      'Đăng nhập bằng tài khoản khác',
    emailUnverified: {
      message: `Vui lòng xác nhận email của bạn tại <strong>{0}</strong> để tiếp tục.`,
      submit: `Gửi lại xác minh email`,
    },
    emptyPermissions: {
      message: `Bạn chưa có quyền. Chờ quản trị viên cấp cho bạn đặc quyền.`,
    },
    passwordResetEmail: {
      message: 'Gửi email đặt lại mật khẩu',
      error: `Email không được công nhận`,
    },
    passwordReset: {
      message: 'Đặt lại mật khẩu',
    },
    emailAddressVerificationEmail: {
      error: `Email không được công nhận`,
    },
    verificationEmailSuccess: `Email xác minh được gửi thành công`,
    passwordResetEmailSuccess: `Email đặt lại mật khẩu đã được gửi thành công`,
    passwordResetSuccess: `Đổi mật khẩu thành công`,
    verifyEmail: {
      success: 'Email được xác minh thành công',
      message:
        'Email của bạn đang được xác minh ...',
    },
  },

  roles: {
    owner: {
      label: 'Admin',
      description: 'Toàn quyền truy cập vào cả hệ thống',
    },
    editor: {
      label: 'Giám đốc',
      description: '...',
    },
    viewer: {
      label: 'Người dùng',
      description: '...',
    },
    auditLogViewer: {
      label: 'Audit Log Viewer',
      description: 'Access to view audit logs',
    },
    iamSecurityReviewer: {
      label: 'Trưởng phòng',
      description: `...`,
    },
    entityEditor: {
      label: 'Entity Editor',
      description: 'Edit access to all entities',
    },
    entityViewer: {
      label: 'Entity Viewer',
      description: 'View access to all entities',
    },
    customersEditor: {
      label: 'Customer Editor',
      description: 'Edit access to Customers',
    },
    customersViewer: {
      label: 'Customer Viewer',
      description: 'View access to Customers',
    },
    suppliersEditor: {
      label: 'Supplier Editor',
      description: 'Edit access to Suppliers',
    },
    suppliersViewer: {
      label: 'Supplier Viewer',
      description: 'View access to Suppliers',
    },
    staffEditor: {
      label: 'Staff Editor',
      description: 'Edit access to Staffs',
    },
    staffViewer: {
      label: 'Nhân viên',
      description: 'Xem quyền truy cập vào Nhân viên',
    },
    productsEditor: {
      label: 'Product Editor',
      description: 'Edit access to Products',
    },
    productsViewer: {
      label: 'Product Viewer',
      description: 'View access to Products',
    },
    brandsEditor: {
      label: 'Brands Editor',
      description: 'Edit access to Brands',
    },
    brandsViewer: {
      label: 'Brands Viewer',
      description: 'View access to Brands',
    },
    categoriesEditor: {
      label: 'Category Editor',
      description: 'Edit access to Categories',
    },
    categoriesViewer: {
      label: 'Category Viewer',
      description: 'View access to Categories',
    },
    expensesEditor: {
      label: 'Expense Editor',
      description: 'Edit access to Expenses',
    },
    expensesViewer: {
      label: 'Expense Viewer',
      description: 'View access to Expenses',
    },
    expenseCategoryEditor: {
      label: 'Expense Category Editor',
      description: 'Edit access to Expense Categories',
    },
    expenseCategoryViewer: {
      label: 'Expense Category Viewer',
      description: 'View access to Expense Categories',
    },
    assetsEditor: {
      label: 'Asset Editor',
      description: 'Edit access to Assets',
    },
    assetsViewer: {
      label: 'Asset Viewer',
      description: 'View access to Assets',
    },
    devicesEditor: {
      label: 'Device Editor',
      description: 'Edit access to Devices',
    },
    devicesViewer: {
      label: 'Device Viewer',
      description: 'View access to Devices',
    },
    noticeEditor: {
      label: 'Notice Editor',
      description: 'Edit access to Notices',
    },
    noticeViewer: {
      label: 'Notice Viewer',
      description: 'View access to Notices',
    },
    salesEditor: {
      label: 'Sale Editor',
      description: 'Edit access to Sales',
    },
    salesViewer: {
      label: 'Sale Viewer',
      description: 'View access to Sales',
    },
    purchasesEditor: {
      label: 'Purchase Editor',
      description: 'Edit access to Purchases',
    },
    purchasesViewer: {
      label: 'Purchase Viewer',
      description: 'View access to Purchases',
    },
    returnsEditor: {
      label: 'Return Editor',
      description: 'Edit access to Returns',
    },
    returnsViewer: {
      label: 'Return Viewer',
      description: 'View access to Returns',
    },
    stockAdjustmentsEditor: {
      label: 'Stock Adjustment Editor',
      description: 'Edit access to Stock Adjustments',
    },
    stockAdjustmentsViewer: {
      label: 'Stock Adjustment Viewer',
      description: 'View access to Stock Adjustments',
    },
    unitsEditor: {
      label: 'Unit Editor',
      description: 'Edit access to Units',
    },
    unitsViewer: {
      label: 'Unit Viewer',
      description: 'View access to Units',
    },
    giftCardEditor: {
      label: 'Gift Card Editor',
      description: 'Edit access to Gift Cards',
    },
    giftCardViewer: {
      label: 'Gift Card Viewer',
      description: 'View access to Gift Cards',
    },
    couponEditor: {
      label: 'Coupon Editor',
      description: 'Edit access to Coupons',
    },
    couponViewer: {
      label: 'Coupon Viewer',
      description: 'View access to Coupons',
    },
    damagesEditor: {
      label: 'Damage Editor',
      description: 'Edit access to Damages',
    },
    damagesViewer: {
      label: 'Damage Viewer',
      description: 'View access to Damages',
    },
    leaveEditor: {
      label: 'Leave Editor',
      description: 'Edit access to Leaves',
    },
    leaveViewer: {
      label: 'Leave Viewer',
      description: 'View access to Leaves',
    },
    leaveTypeEditor: {
      label: 'Leave Type Editor',
      description: 'Edit access to Leave Types',
    },
    leaveTypeViewer: {
      label: 'Leave Type Viewer',
      description: 'View access to Leave Types',
    },
    allowanceAndDeductionEditor: {
      label: 'Allowance And Deduction Editor',
      description: 'Edit access to Allowances And Deductions',
    },
    allowanceAndDeductionViewer: {
      label: 'Allowance And Deduction Viewer',
      description: 'View access to Allowances And Deductions',
    },
    payrollEditor: {
      label: 'Payroll Editor',
      description: 'Edit access to Payrolls',
    },
    payrollViewer: {
      label: 'Payroll Viewer',
      description: 'View access to Payrolls',
    },
    attendanceEditor: {
      label: 'Attendance Editor',
      description: 'Edit access to Attendances',
    },
    attendanceViewer: {
      label: 'Attendance Viewer',
      description: 'View access to Attendances',
    },
    taxClassEditor: {
      label: 'Tax Class Editor',
      description: 'Edit access to Tax Classes',
    },
    taxClassViewer: {
      label: 'Tax Class Viewer',
      description: 'View access to Tax Classes',
    },
    todoEditor: {
      label: 'Todo Editor',
      description: 'Edit access to Todos',
    },
    todoViewer: {
      label: 'Todo Viewer',
      description: 'View access to Todos',
    },
    documentsEditor: {
      label: 'Document Editor',
      description: 'Edit access to Documents',
    },
    documentsViewer: {
      label: 'Document Viewer',
      description: 'View access to Documents',
    },
    paymentMethodsEditor: {
      label: 'Payment Method Editor',
      description: 'Edit access to Payment Methods',
    },
    paymentMethodsViewer: {
      label: 'Payment Method Viewer',
      description: 'View access to Payment Methods',
    },
    documentTypesEditor: {
      label: 'Document Type Editor',
      description: 'Edit access to Document Types',
    },
    documentTypesViewer: {
      label: 'Document Type Viewer',
      description: 'View access to Document Types',
    },
    memosEditor: {
      label: 'Memo Editor',
      description: 'Edit access to Memos',
    },
    memosViewer: {
      label: 'Memo Viewer',
      description: 'View access to Memos',
    },
    currencyEditor: {
      label: 'Currency Editor',
      description: 'Edit access to Currencies',
    },
    currencyViewer: {
      label: 'Currency Viewer',
      description: 'View access to Currencies',
    },
    holidayEditor: {
      label: 'Holiday Editor',
      description: 'Edit access to Holidays',
    },
    holidayViewer: {
      label: 'Holiday Viewer',
      description: 'View access to Holidays',
    },
    stallEditor: {
      label: 'Stall Editor',
      description: 'Edit access to Stalls',
    },
    stallViewer: {
      label: 'Stall Viewer',
      description: 'View access to Stalls',
    },
    variationEditor: {
      label: 'Variation Editor',
      description: 'Edit access to Variations',
    },
    variationViewer: {
      label: 'Variation Viewer',
      description: 'View access to Variations',
    },
    productLogsEditor: {
      label: 'Product Log Editor',
      description: 'Edit access to Product Logs',
    },
    productLogsViewer: {
      label: 'Product Log Viewer',
      description: 'View access to Product Logs',
    },
    stockTransferEditor: {
      label: 'Stock Transfer Editor',
      description: 'Edit access to StockTransfers',
    },
    stockTransferViewer: {
      label: 'Stock Transfer Viewer',
      description: 'View access to StockTransfers',
    },
    deviceSessionsEditor: {
      label: 'Device Session Editor',
      description: 'Edit access to Device Sessions',
    },
    deviceSessionsViewer: {
      label: 'Device Session Viewer',
      description: 'View access to Device Sessions',
    },
    productCountEditor: {
      label: 'Product Count Editor',
      description: 'Edit access to Product Counts',
    },
    productCountViewer: {
      label: 'Product Count Viewer',
      description: 'View access to Product Counts',
    },
    productValueEditor: {
      label: 'Product Value Editor',
      description: 'Edit access to Product Values',
    },
    productValueViewer: {
      label: 'Product Value Viewer',
      description: 'View access to Product Values',
    },
    registerEditor: {
      label: 'Register Editor',
      description: 'Edit access to Registers',
    },
    registerViewer: {
      label: 'Register Viewer',
      description: 'View access to Registers',
    },
    commissionsEditor: {
      label: 'Commission Editor',
      description: 'Edit access to Commissions',
    },
    commissionsViewer: {
      label: 'Commission Viewer',
      description: 'View access to Commissions',
    },
    transactionsEditor: {
      label: 'Transaction Editor',
      description: 'Edit access to Transactions',
    },
    transactionsViewer: {
      label: 'Transaction Viewer',
      description: 'View access to Transactions',
    },
    priceChangeEditor: {
      label: 'Price Change Editor',
      description: 'Edit access to PriceChanges',
    },
    priceChangeViewer: {
      label: 'Price Change Viewer',
      description: 'View access to PriceChanges',
    },
  },

  iam: {
    title: 'Quản lý tài khoản',
    menu: 'Tài khoản',
    disable: 'Khóa',
    disabled: 'Khóa',
    enabled: 'Đã bật',
    enable: 'Đã bật',
    doEnableSuccess: 'Tài khoản kích hoạt thành công',
    doDisableSuccess: 'Tài khoản bị khóa thành công',
    doDisableAllSuccess: 'Tài khoản bị khóa thành công',
    doEnableAllSuccess: 'Tài khoản đã bật thành công',
    doAddSuccess: 'Tài khoản đã lưu thành công',
    doUpdateSuccess: 'Tài khoản đã lưu thành công',
    viewBy: 'View By',
    users: {
      name: 'người dùng',
      label: 'Người dùng',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    edit: {
      title: 'Chỉnh sửa tài khoản',
    },
    new: {
      title: 'Thêm tài khoản',
      titleModal: 'Thêm tài khoản',
      emailsHint:
        'Tách nhiều địa chỉ email bằng ký tự dấu phẩy.',
    },
    view: {
      title: 'Xem tài khoản',
      activity: 'Hoạt động',
    },
    importer: {
      title: 'Import',
      fileName: 'users_import_template',
      hint:
        'Files/Images các cột phải là URL của các tệp được phân tách bằng dấu cách.',
    },
    errors: {
      userAlreadyExists:
        'Người dùng địa chỉ email này đã tồn tại',
      userNotFound: 'Không tìm thấy người dùng',
      disablingHimself: `Bạn không thể tự vô hiệu hóa`,
      revokingOwnPermission: `Bạn không thể thu hồi sự cho phép của chủ sở hữu của riêng bạn`,
    },
  },

  user: {
    fields: {
      productUnit: 'Phòng ban',
      maSo: 'Mã số',
      nhom: 'Nhóm',
      diaChi: 'Địa chỉ',
      phongBan: 'Phòng ban',
      productVariation: 'Nhóm',
      staffDateOfBirth: 'Ngày sinh',
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars: 'Ảnh',
      email: 'Email',
      emails: 'Email',
      fullName: 'Họ và tên',
      firstName: 'Tên người dùng',
      lastName: 'Họ',
      status: 'Trạng thái',
      disabled: 'Khóa',
      phoneNumber: 'Số điện thoại',
      role: 'Vai trò',
      createdAt: 'Tạo vào lúc',
      updatedAt: 'Cập nhật vào lúc',
      roleUser: 'Role/User',
      roles: 'Chức vụ',
      createdAtRange: 'Tạo vào lúc',
      password: 'Mật khẩu',
      rememberMe: 'Lưu thông tin tài khoản',
    },
    enabled: 'Đã bật',
    disabled: 'Khóa',
    validations: {
      // eslint-disable-next-line
      email: 'Thiếu @ ví dụ: ${value}@gmail.com, ${value}@hotmail.com,... ',
    },
  },

  auditLog: {
    menu: 'Lịch sử',
    title: 'Lịch sử',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Phân tách nhiều thực thể bằng ký tự dấu phẩy.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  home: {
    menu: 'Trang chủ',
    message: `Trang này sử dụng dữ liệu giả cho mục đích trình diễn. Bạn có thể chỉnh sửa nó tại frontend/src/modules/home/components/home-page.vue.`,
    charts: {
      day: 'ngày',
      red: 'Màu đỏ',
      green: 'Màu xanh lá',
      yellow: 'Màu vàng',
      grey: 'Màu xám',
      blue: 'Màu xanh da trời',
      orange: 'Màu cam',
      months: {
        1: 'Tháng 1',
        2: 'Tháng 2',
        3: 'Tháng 3',
        4: 'Tháng 4',
        5: 'Tháng 5',
        6: 'Tháng 6',
        7: 'Tháng 7',
      },
      eating: 'Ăn',
      drinking: 'Uống',
      sleeping: 'Ngủ',
      designing: 'Thiết kế',
      coding: 'Mã hóa',
      cycling: 'Đạp xe',
      running: 'Đang chạy',
      customer: 'Khách hàng',
    },
  },
  errors: {
    backToHome: 'Trở về trang chủ',
    403: ``,
    404: 'Xin lỗi, trang bạn truy cập không tồn tại',
    500: 'Xin lỗi, máy chủ đang báo lỗi',
    forbidden: {
      message: 'Cấm',
    },
    validation: {
      message: 'Xảy ra lỗi',
    },
    defaultErrorMessage: 'Xảy ra lỗi!!!',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} không hợp lệ',
      required: '${path} không được bỏ trống',
      oneOf:
        '${path} phải là một trong các giá trị sau: ${values}',
      notOneOf:
        '${path} không được là một trong các giá trị sau: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} phải là một ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} Không được bỏ trống',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
      invalid: '${path} must be a number',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Tải lên',
    image: 'Bạn phải tải lên một hình ảnh',
    size: 'Tệp quá lớn. Kích thước tối đa được phép là {0}',
    formats: `Định dạng không hợp lệ. Cần phải '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Trạng thái',
    pending: 'Đang chờ xử lý',
    imported: 'Imported',
    error: 'Error',
    total: `{0} đã nhập, {1} đang chờ xử lý và {2} có lỗi`,
    importedMessage: `Đã xử lý {0} trên {1}.`,
    noNavigateAwayMessage:
      'Không điều hướng khỏi trang này hoặc quá trình nhập sẽ bị dừng.',
    completed: {
      success:
        'Import thành công. Tất cả các hàng đã được nhập thành công.',
      someErrors:
        'Quá trình xử lý hoàn tất, nhưng một số hàng không thể nhập được.s',
      allErrors: 'Import thất bại. Không có hàng hợp lệ.',
    },
    form: {
      downloadTemplate: 'Tải mẫu',
      hint:
        'Nhấp vào hoặc kéo tệp vào khu vực này để tiếp tục',
    },
    list: {
      discardConfirm:
        'Bạn muốn xóa',
    },
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

  autocomplete: {
    loading: 'Đang tải...',
  },

  imagesViewer: {
    noImage: 'Không có hình ảnh',
  },

  firebaseErrors: {
    'auth/user-disabled': 'Tài khoản của bạn bị khóa',
    'auth/user-not-found': `Xin lỗi, chúng tôi không nhận ra thông tin đăng nhập của bạn`,
    'auth/wrong-password': `Xin lỗi, chúng tôi không nhận ra thông tin đăng nhập của bạn`,
    'auth/weak-password': 'Mật khẩu này quá yếu',
    'auth/email-already-in-use': 'Email đã được sử dụng',
    'auth/invalid-email': 'Vui lòng cung cấp một email hợp lệ',
    'auth/account-exists-with-different-credential':
      'Email đã được sử dụng cho một phương thức xác thực khác.',
    'auth/credential-already-in-use':
      'Thông tin đã được sử dụng',
  },
};

export default ptBR;
