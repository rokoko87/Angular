// package:
// file: company.proto

var company_pb = require("../generated/company_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CompanyService = (function () {
  function CompanyService() {}
  CompanyService.serviceName = "CompanyService";
  return CompanyService;
}());

CompanyService.LoadCompanies = {
  methodName: "LoadCompanies",
  service: CompanyService,
  requestStream: false,
  responseStream: false,
  requestType: company_pb.FiltrosRequest,
  responseType: company_pb.CompanyResponse
};

exports.CompanyService = CompanyService;

function CompanyServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CompanyServiceClient.prototype.loadCompanies = function loadCompanies(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyService.LoadCompanies, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CompanyServiceClient = CompanyServiceClient;
