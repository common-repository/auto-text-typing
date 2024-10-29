/**
 * MELIBU PLUGIN EVENT
 *
 * @author      Samet Tarim
 * @copyright   (c) 2016, Samet Tarim
 * @link        https://www.tnado.com/author/prod3v3loper/
 * @package     Melabu
 * @subpackage  Sharing Social Safe
 * @since       1.0
 */
var melibu_plugin_event = {
    name: 'Melibu Plugin Event Handler',
    /**
     * Event Handler
     * 
     * @param {type} elem
     * @param {type} ereignis
     * @param {type} funktion
     * @returns {undefined}
     */
    addEvent: function (elem, ereignis, funktion) {
        if (addEventListener) {
            if (elem !== null) {
                if (elem !== '') {
                    elem.addEventListener(ereignis, funktion, false);
                } else {
                    addEventListener(ereignis, funktion, false);
                }
            }
        } else if (attachEvent) {
            if (elem !== null) {
                if (elem !== '') {
                    elem.attachEvent("on" + ereignis, funktion);
                } else {
                    attachEvent("on" + ereignis, funktion);
                }
            }
        }
    }
};