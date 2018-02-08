// import loadingImg from '../../images/loading.gif';

// 懒汉式单列模式创建缓冲
export default (function () {
    let loading;
    return function () {
        if (!loading) {
            loading = document.createElement('div');
            // loading.style.display = 'none';
            loading.style.position = 'fixed';
            loading.style.width = 0;
            loading.style.height = '3px';
            loading.style.top = 0;
            loading.style.left = 0;
            loading.style.backgroundColor = '#29d';
            loading.style.zIndex = 999;
            // loading.style.boxShadow = '1px 1px 2px #A8D8F2';
            // loading.style.boxShadow = '1px 1px 2px #fbe6e6';
            loading.style.borderRadius = '2px';


            // 图片缓冲
           /* let img = document.createElement('img');
            img.setAttribute('src', loadingImg);
            img.style.position = 'absolute';
            img.style.top = '50%';
            img.style.left = '50%';
            img.style.marginTop = '-16px';
            img.style.marginLeft = '-16px';

            loading.appendChild(img);*/
            document.body.appendChild(loading);
        }
        return loading;
    }
})();
