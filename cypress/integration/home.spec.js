describe('首页', () => {
  it('默认显示首页', () => {
    cy.visit('https://www.nancal.com')
  });
  context('产品中心', () => {
    it('点击产品中心，跳转产品中心页面', () => {
      cy.get('.home-model').contains('产品中心').click()
      cy.get('.el-breadcrumb .el-breadcrumb__item').last().find('.el-breadcrumb__inner').should('have.text', '产品中心')
    });
    it('点击面包屑首页，返回首页', () => {
      cy.get('.el-breadcrumb .el-breadcrumb__item').contains('首页').click()
    })
  })
  context('解决方案', () => {
    it('点击解决方案，跳转解决方案页面', () => {
      cy.get('.home-model').contains("解决方案").click()
      cy.get('.el-breadcrumb .el-breadcrumb__item').last().find('.el-breadcrumb__inner').should('have.text', "解决方案")
    });
    it('点击面包屑首页，返回首页', () => {
      cy.get('.el-breadcrumb .el-breadcrumb__item').contains("首页").click()
    })
  })
  context('NEWS', () => {
    it('点击more，跳转新闻中心页面', () => {
      cy.get('.home-news-head').contains('More').click()
      cy.get('.news-search input').should('be.exist')
    });
    it('点击菜单导航首页，返回首页', () => {
      cy.get('.layout-header ul li').contains('首页').click()
    });
    it('验证news有内容存在', () => {
      cy.get('.news-list .home-news-img').should('be.exist')
    });
  })
  context('合作伙伴', () => {
    it('合作伙伴有内容存在', () => {
      cy.get('.partner-list ol li img').should('be.exist')
    })
  })
});
