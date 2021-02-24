import * as axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://intravision-task.test01.intravision.ru',
});

const tenantguid = '1d6d7845-97a6-4240-b4f6-c166b876dc43'

export const applicationsAPI = {

    getApplications() {
        return instance.get(`/odata/tasks?tenantguid=${tenantguid}`);
    },
    getPriorities() {
        return instance.get(`/api/${tenantguid}/Priorities`);
    },
   addComment(comment, appId, statusId, executorId) {
        return instance.put(`/api/${tenantguid}/Tasks`, {
            "id": appId, "description": comment,
            "statusId":statusId, "executorId":executorId});
    },
    addNewApp(name, comment) {
        return instance.post(`/api/${tenantguid}/Tasks`, {"name": name, "comment": comment});
    }
/*
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },

    setNewAva(ava) {
        const formData = new FormData();
        formData.append('image', ava)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    setNewProfileInfo(data) {
        return instance.put('profile', data);
    }*/
}
