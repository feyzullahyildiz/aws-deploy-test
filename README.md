
# Ne yapmak istedik, ne oldu
- Bu projeyi build edip elastic beanstalk'de yayınlamak istedik.
- github actions ücretsiz bir şekilde yapıyor
- github actionda, docker image'i build edip testleri koşuyoruz.
- Bir hata çıkmadığı takdirde deployment'a devam ediyor.
- AWS
    - IAM ile bir kullanıcı oluşturduk ve access key ve secret key aldık
    - Bu 2 değeri github'a secret olarak ekledi
        - proje/settings/secrets and variables/actions
    - Bir group oluşturdum ve admin permissionlarını verdim. Denemek için yaw
        - AdministratorAccess-AWSElasticBeanstalk
        - AWSBackupServiceRolePolicyForS3Backup
    - Roller kısmından daha önceden şunları eklemiştim ama olamıştı
        - AWSElasticBeanstalkWebTier
        - AWSElasticBeanstalkWorkerTier
        - AWSElasticBeanstalkMulticontainerDocker
        - AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy
    - S3 ile alakalı birşeyler yapmaya çalıştık
        - permissions/Object Ownership'a girdik
        - ACLs enabled ve Object writer yapmamız istendi (zaten öyleydi)
    - Elastic beanstalk oluşturduk 
        - sample hali ile docker'lısını seçtik (platform olarak)
        - region'ı bilmek önemli
        - application name ve environment-name verdik
    - Bean stalk sonrası S3'de bir yer açıldı.
        - isminde elastic beanstalk ve region yazıyor. Bu isim önemli. deploy.yaml dosyasına ekleyeceğiz
- Nasıl çalıştı
    - Docker ile aslında hiçbir işimiz olmadı, sadece test koştuk
    - S3'e öyle bir zip dosyası attık ki
    - İşler daha da karıştı, bazı şeyleri yeni fark ediyorum.... WOOOOW
    - WOow wow woww, haram
    - Zip dosyası oluşturuyoruz ama içinde build edilmiş dosyalar yok.
    - Projenin githubdan zip halinde indirilecek şeklinde bir zip var.
    - Galiba bu zip dosyasını docker'ın içinde açıyor ve sırasıyla şu kodları çalıştırıyor...
        - npm install
        - npm start
    
