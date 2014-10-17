/*
 * File: app/view/LoginFormViewController.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AppBat.view.LoginFormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginform',

    onLoginButtonClick: function(button, e, eOpts) {
        var view = this.getView(),
            form = button.up('form'),
            formWindow = button.up('window'),
            values = form.getValues();

        // Success
        var successCallback = function(resp, ops) {
            debugger;
            // Hide login panel
            view.loginPanel.hide();

            // Show logout panel
            view.logoutPanel.show();

            // Close window
            formWindow.destroy();

        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show login failure error
            Ext.Msg.alert('Login Failure', resp);

        };


        // TODO: Login using server-side authentication service
        // Ext.Ajax.request({
        //		url: "/login",
        //		params: values,
        //		success: successCallback,
        //		failure: failureCallback
        // });

        // Just run success for now
        successCallback();
    }

});
