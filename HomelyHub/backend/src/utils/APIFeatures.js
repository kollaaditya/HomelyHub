class APIFeatures {
    constructor(a, b) {
        this['query'] = a, this['queryString'] = b;
    }
    ['filter']() {
        let a = {}, b = { ...this['queryString'] };
        b['minPrice'] && b['maxPrice'] && (b['maxPrice']['includes']('>') ? a['price'] = { '$gte': b['minPrice'] } : a['price'] = {
            '$gte': b['minPrice'],
            '$lte': b['maxPrice']
        });
        if (b['propertyType']) {
            let c = b['propertyType']['split'](',')['map'](d => d['trim']());
            a['propertyType'] = { '$in': c };
        }
        b['roomType'] && (a['roomType'] = b['roomType']);
        if (b['amenities']) {
            const d = Array['isArray'](b['amenities']) ? b['amenities'] : [b['amenities']];
            a['amenities.name'] = { '$all': d };
        }
        return this['query'] = this['query']['find'](a), this;
    }
    ['search']() {
        let a = {}, b = { ...this['queryString'] };
        if (b['city']) {
            a['$or'] = [
                { 'address.city': { '$regex': b['city'], '$options': 'i' } },
                { 'address.state': { '$regex': b['city'], '$options': 'i' } },
                { 'address.area': { '$regex': b['city'], '$options': 'i' } }
            ];
        }
        if (b['guests']) {
            a['maximumGuest'] = { '$gte': parseInt(b['guests']) };
        }
        if (b['dateIn'] && b['dateOut']) {
            try {
                const dateIn = new Date(b['dateIn']);
                const dateOut = new Date(b['dateOut']);
                if (!isNaN(dateIn.getTime()) && !isNaN(dateOut.getTime())) {
                    a['currentBookings'] = {
                        '$not': {
                            '$elemMatch': {
                                'fromDate': { '$lte': dateOut },
                                'toDate': { '$gte': dateIn }
                            }
                        }
                    };
                }
            } catch (error) {
                console.log('Date parsing error:', error);
            }
        }
        this['query'] = this['query']['find'](a);
        return this;
    }
    ['paginate']() {
        let a = this['queryString']['page'] * 0x1 || 0x1, b = this['queryString']['limit'] * 0x1 || 0xc, c = (a - 0x1) * b;
        return this['query'] = this['query']['skip'](c)['limit'](b), this;
    }
}
export {
    APIFeatures
};