export default class MediaGenerator {
    static getMediaPath<T>(mediaObject: Array<T>): Array<T> {
        const mediaCollection: Array<T> = [];
        const gMediaPath = 'https://media.asicdn.com/images/jpgt/';
        const noImagePath = 'https://admin.espwebsite.com/images/ImageNotInCatalog160.png';
        if (typeof mediaObject !== 'undefined' && mediaObject.length > 0) {
            mediaObject.forEach((v, k) => {
                // tslint:disable-next-line: no-string-literal
                if (v['UseCustomMedia'] === true || v['IsCustomImage'] === 'Y') {
                  // tslint:disable-next-line: no-string-literal
                  v['MediaUrl'] = noImagePath;
                  mediaCollection.push(v);
                } else {
                    let mediaPath;
                    const mediaResponsePath: string = v.hasOwnProperty('Media_ID')
                          // tslint:disable-next-line: no-string-literal
                          ? v['MediaPath'].toString() : v.hasOwnProperty('MediaId')
                          // tslint:disable-next-line: no-string-literal
                          ? v['MediaId'].toString() : v['MediaPath'].toString();
                    if (mediaResponsePath.toString().length > 4) {
                            mediaPath = mediaResponsePath.substring(
                              0,
                              mediaResponsePath.length - 4
                            );
                            mediaPath = mediaPath + '0000';
                            // tslint:disable-next-line: no-string-literal
                            v['MediaUrl'] =
                               `${gMediaPath + mediaPath}/${mediaResponsePath}.jpg`;
                            mediaCollection.push(v);
                          } else {
                            if (
                              mediaResponsePath.toString().length > 0 &&
                              mediaResponsePath.toString().length < 4
                            ) {
                              mediaPath = '10000';
                              // tslint:disable-next-line: no-string-literal
                              v['MediaUrl'] =
                              `${gMediaPath + mediaPath}/${mediaResponsePath}.jpg`;
                              mediaCollection.push(v);
                            } else {
                              // tslint:disable-next-line: no-string-literal
                              v['MediaUrl'] = noImagePath;
                              mediaCollection.push(v);
                            }
                          }
                }
            });
        }
        return mediaCollection;
    }
}
