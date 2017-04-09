"use strict";
let helioviewer = require('../index.js').helioviewer;
let chai = require('chai');
let expect = chai.expect;
let chaiXml = require('chai-xml');
chai.use(chaiXml);
let chaiSubset = require('chai-subset');
let chaiFiles = require('chai-files');
let file = chaiFiles.file;
let dir = chaiFiles.dir;
chai.use(chaiFiles);
chai.use(chaiSubset);

let fs = require('fs');
let assert = chai.assert;

describe('Helioviewer', function() {
    it('should return json with all args jp2Image', function(done) {
        helioviewer.getjp2image({date:"2014-01-01T23:59:59", sourceId:14})
            .then(function(data){
                assert.containSubset(JSON.parse(data), {uri: "jpip://helioviewer.org:8090/AIA/2014/01/02/335/2014_01_02__00_00_02_62__SDO_AIA_AIA_335.jp2"});
                done();

            }).catch(done);

    });

    it('should return valid xml data jp2Header', function(done) {
        helioviewer.getjp2header(7654321).then(function(data){
            expect(data).xml.to.be.valid();
            done();
        }).catch(done);
    });

    it('should return json with all args getJPX', function(done) {
        helioviewer.getJPX({
            startTime: "2014-01-01T00:00:00",
                endTime: "2014-01-01T00:45:00" ,
                sourceId: 14,
                cadence: 12,
                linked: true
        })
            .then(function(data){
                assert.containSubset(JSON.parse(data), {uri: "jpip://helioviewer.org:8090/movies/SDO_AIA_335_F2014-01-01T00.00.00Z_T2014-01-01T00.45.00ZB12L.jpx"});
                done();

            }).catch(done);

    });

    it('should return json with all args getJPXClosestToMidpoint', function(done) {
        helioviewer.getJPXClosestToMidPoint({
            startTimes: [1306886400,1306887000,1306887600],
            endTimes: [1306886700,1306887300,1306887900] ,
            sourceId: 14,
            linked: true
        })
            .then(function(data){
                assert.containSubset(JSON.parse(data), {uri: "jpip://helioviewer.org:8090/movies/SDO_AIA_335_F2011-06-01T00.00.00Z_T2011-06-01T00.25.00ZLCMP.jpx"});
                done();

            }).catch(done);

    });

    it('should return json with all args queueMovie', function(done) {
        helioviewer.queueMovie({
            startTime: "2010-03-01T12:12:12",
            endTime: "2010-03-04T12:12:12",
            layers: "[3,1,100],[4,1,100]",
            events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
            eventsLabels: false,
            imageScale: 21.04,
            format: "mp4",
            frameRate: 15,
            maxFrames: 300,
            scale: true,
            scaleType: "earth",
            scaleX: -1000,
            scaleY: -500,
            movieLength: 4.3333,
            watermark: true,
            width: 1920,
            height: 1200,
            x0: 0,
            y0: 0,
            x1: -5000,
            y1: -5000,
            x2: 5000,
            y2: 5000,
            //callback: "callback"
        })
            .then(function(data){
                expect(JSON.parse(data)).to.include.keys("eta");
                done();

            }).catch(done);

    });

    it('should return json with all args getMovieStatus', function(done) {
        helioviewer.getMovieStatus({
            id: "F3Dh5",
            format: "mp4",
            verbose: true,
            //callback: "callback",
            //token: "4673d6db4e2a3365ab361267f2a9a112"
        })
            .then(function(data){
                expect(JSON.parse(data)).to.include.keys("duration");
                done();

            }).catch(done);

    });
    it('should return json with token getMovieStatus', function(done) {
        helioviewer.getMovieStatus({
            id: "F3Dh5",
            //format: "mp4",
            //verbose: true,
            //callback: "callback",
            token: "4673d6db4e2a3365ab361267f2a9a112"
        })
            .then(function(data){
                expect(JSON.parse(data)).to.include.keys("status");
                done();

            }).catch(done);

    });


    it('should return json with all args reQueueMovie', function(done) {
        helioviewer.reQueueMovie("VXvX5")
            .then(function(data){
                expect(JSON.parse(data)).to.include.keys("error");
                done();

            }).catch(done);

    });

    it('should download file with all args downloadMovie', function() {
        helioviewer.downloadMovie({
            id: "VXvX5",
            format: "mp4",
            hq: true
        });
        expect(file('VXvX5.mp4')).to.exist;

    });

    it('should return req_url with all args playMovie', function() {
        let r = helioviewer.playMovie({
            id: "F3Dh5",
            format: "mp4",
            height: 1920,
            hq: true,
            width:1200
        });
        expect(r).to.equal("https://api.helioviewer.org/v2/playMovie/?id=F3Dh5&format=mp4&height=1920&hq=true&width=1200")

    });

    it('should return json with all args takeScreenshot', function(done) {
        this.timeout(20000);
        helioviewer.takeScreenshot({
            date: "2014-01-01T23:59:59",
            imageScale: 2.4204409,
            layers: "[SDO,AIA,AIA,335,1,100]",
            eventLabels: false,
            height: 1200,
            events: "[AR,HMI_HARP;SPoCA,1],[CH,all,1]",
            scale: false,
            scaleType: "earth",
            scaleX: -1000,
            scaleY: -500,
            width: 1920,
            x0: 1,
            y0: 1,
            x1: -5000,
            y1: -5000,
            x2: 5000,
            y2: 5000,
            display: false,
            watermark: false
        }).then(function(data){
            expect(JSON.parse(data)).to.include.keys("id");
            done();
        }).catch(done);
    });

    it('should return json with all args getClosestImage', function(done) {
        helioviewer.getClosestImage({date: "2014-01-01T23:59:59", sourceId: 14}).then(function(data){
            expect(JSON.parse(data)).to.include.keys("id");
            done();
        }).catch(done);
    });

    it('should download file with all args downloadScreenshot', function() {
        helioviewer.downloadScreenshot(3240748);
        expect(file('3240748.png')).to.exist;

    });

    it('should return json with all args getDataSources', function(done) {
        helioviewer.getDataSources({
            verbose: true,
            enable: "[Yohkoh,STEREO_A,STEREO_B]"
        }).then(function(data){
            expect(JSON.parse(data)).to.include.keys("Yohkoh");
            done();
        }).catch(done);
    });
    it('should return json with no args getDataSources', function(done) {
        helioviewer.getDataSources().then(function(data){
            expect(JSON.parse(data)).to.include.keys("Yohkoh");
            done();
        }).catch(done);
    });

    it('should return req_url with all args getTile', function(done) {
        let r = helioviewer.getTile({
            id: 36275490,
            x: -1,
            y: -1,
            imageScale: 2.42044088
        });
        expect(r).to.equal("https://api.helioviewer.org/v2/getTile/?id=36275490&x=-1&y=-1&imageScale=2.42044088");
        done()
    });

    it('should return json with all args shortenUrl', function(done) {
        let r = helioviewer.shortenURL("date%3D2014-02-25T15%3A18%3A07.000Z%26imageScale%3D2.4204409%26centerX%3D-410.06307838566283%26centerY%3D-244.6662219973343%26imageLayers%3D%255BSDO%2CAIA%2CAIA%2C304%2C1%2C100%255D%26eventLayers%3D%26eventLabels%3Dtrue")
            .then(function(data){
                expect(JSON.parse(data)).to.include.keys("data");
                done();
            }).catch(done);
    });

    it('should return json with all args getNewsFeed', function(done) {
        let r = helioviewer.getNewsFeed()
            .then(function(data){
                expect(data).xml.to.be.valid();
                done();
            }).catch(done);
    });

    it('should return req_url with all args checkYouTubeAuth', function(done) {
        helioviewer.checkYouTubeAuth()
            .then(function (data) {
                expect(JSON.parse(data)).to.equal(false);
                done();
            }).catch(done);
    });

    it('should return req_url with all args getYouTubeAuth', function(done) {
        let r = helioviewer.getYouTubeAuth({
            id: "F3Dh5",
            title: "Test",
            description: "This movie was produced by Helioviewer.org. See the original at http://helioviewer.org/?movieId=F3Dh5 or download a high-quality version from http://api.helioviewer.org/v2/downloadMovie/?id=F3Dh5&format=mp4&hq=true",
            tags: "test",
            share: true
        });
        expect(r).to.equal("https://api.helioviewer.org/v2/getYouTubeAuth/?id=F3Dh5&title=Test&description=This movie was produced by Helioviewer.org. See the original at http://helioviewer.org/?movieId=F3Dh5 or download a high-quality version from http://api.helioviewer.org/v2/downloadMovie/?id=F3Dh5&format=mp4&hq=true&tags=test&share=true");
        done()
    });

    it('should return req_url with all args getYouTubeAuth', function(done) {
        helioviewer.uploadMovieToYouTube({
            id: "F3Dh5",
            share: true
        }).then(function(data){
            expect(JSON.parse(data)).to.include.keys("error");
            done()
        })

    });

    it('should return json with no args getUserVideos', function(done) {
        helioviewer.getUserVideos()
            .then(function(data){
                expect(JSON.parse(data)[0]).to.include.keys("id");
                done();
            }).catch(done);
    });

    it('should return json with all args getUserVideos', function(done) {
        helioviewer.getUserVideos({
            num: 5,
            since: "2014-01-01T23:59:59",
            force: true
        })
            .then(function(data){
                expect(JSON.parse(data)[0]).to.include.keys("id");
                done();
            }).catch(done);
    });
});
